/**
 * Serves the Svantic CLI installer script.
 * 
 * Usage: curl -fsSL https://svantic.com/install.sh | bash
 */

const INSTALL_SCRIPT = `#!/bin/bash
#
# Svantic CLI Installer
#
# Usage:
#   curl -fsSL https://svantic.com/install.sh | bash
#   
# Options:
#   --version VERSION   Install specific version (default: latest)
#
# Environment variables:
#   SVANTIC_INSTALL_DIR  Installation directory (default: /usr/local/bin or ~/.local/bin)
#   SVANTIC_VERSION      Version to install
#

set -euo pipefail

RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[0;33m'
BLUE='\\033[0;34m'
NC='\\033[0m'

BINARY_NAME="svantic"
BFF_URL="https://bff.svantic.com"

detect_platform() {
  local os arch
  
  os=$(uname -s | tr '[:upper:]' '[:lower:]')
  arch=$(uname -m)
  
  case "$os" in
    darwin) os="darwin" ;;
    linux) os="linux" ;;
    mingw*|msys*|cygwin*) os="win"; BINARY_NAME="svantic.exe" ;;
    *)
      echo -e "\${RED}Error: Unsupported OS: $os\${NC}"
      exit 1
      ;;
  esac
  
  case "$arch" in
    x86_64|amd64) arch="x64" ;;
    arm64|aarch64) arch="arm64" ;;
    *)
      echo -e "\${RED}Error: Unsupported architecture: $arch\${NC}"
      exit 1
      ;;
  esac
  
  echo "\${os}-\${arch}"
}

get_latest_version() {
  curl -fsSL "\${BFF_URL}/api/download/cli/latest" 2>/dev/null \\
    | grep -o '"version":"[^"]*"' \\
    | sed 's/"version":"\\([^"]*\\)"/\\1/' \\
    || echo ""
}

get_install_dir() {
  if [[ -n "\${SVANTIC_INSTALL_DIR:-}" ]]; then
    echo "$SVANTIC_INSTALL_DIR"
  elif [[ -w /usr/local/bin ]]; then
    echo "/usr/local/bin"
  else
    echo "$HOME/.local/bin"
  fi
}

main() {
  local version="\${SVANTIC_VERSION:-}"
  
  while [[ $# -gt 0 ]]; do
    case "$1" in
      --version|-v)
        version="$2"
        shift 2
        ;;
      --help|-h)
        echo "Svantic CLI Installer"
        echo ""
        echo "Usage: curl -fsSL https://svantic.com/install.sh | bash"
        echo ""
        echo "Options:"
        echo "  --version VERSION   Install specific version"
        echo ""
        exit 0
        ;;
      *)
        shift
        ;;
    esac
  done
  
  echo -e "\${BLUE}"
  echo "  ╔═══════════════════════════════════════╗"
  echo "  ║         Svantic CLI Installer         ║"
  echo "  ╚═══════════════════════════════════════╝"
  echo -e "\${NC}"
  
  if [[ -z "$version" ]]; then
    echo -e "\${YELLOW}Fetching latest version...\${NC}"
    version=$(get_latest_version)
    if [[ -z "$version" ]]; then
      echo -e "\${RED}Error: Could not determine latest version\${NC}"
      echo "Specify version with: --version X.Y.Z"
      exit 1
    fi
  fi
  
  echo -e "📦 Version: \${GREEN}\${version}\${NC}"
  
  local platform
  platform=$(detect_platform)
  echo -e "🖥️  Platform: \${GREEN}\${platform}\${NC}"
  
  local install_dir
  install_dir=$(get_install_dir)
  echo -e "📁 Install to: \${GREEN}\${install_dir}\${NC}"
  
  mkdir -p "$install_dir"
  
  local binary_file="svantic-\${platform}"
  [[ "$platform" == win-* ]] && binary_file="\${binary_file}.exe"
  
  local download_url="\${BFF_URL}/api/download/cli/\${version}/\${platform}"
  local output_path="\${install_dir}/\${BINARY_NAME}"
  
  echo ""
  echo -e "\${YELLOW}Downloading...\${NC}"
  echo "  $download_url"
  
  if command -v curl &> /dev/null; then
    curl -fsSL "$download_url" -o "$output_path"
  elif command -v wget &> /dev/null; then
    wget -q "$download_url" -O "$output_path"
  else
    echo -e "\${RED}Error: curl or wget required\${NC}"
    exit 1
  fi
  
  chmod +x "$output_path"
  
  echo ""
  echo -e "\${GREEN}✅ Svantic CLI installed successfully!\${NC}"
  echo ""
  
  if [[ ":\$PATH:" != *":\$install_dir:"* ]]; then
    echo -e "\${YELLOW}⚠️  \$install_dir is not in your PATH\${NC}"
    echo ""
    echo "Add to your shell config:"
    echo ""
    echo "  export PATH=\\"\\$PATH:\$install_dir\\""
    echo ""
  fi
  
  echo "Run 'svantic --help' to get started."
}

main "$@"
`;

export async function GET() {
  return new Response(INSTALL_SCRIPT, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'inline; filename="install.sh"',
      'Cache-Control': 'public, max-age=300',
    },
  });
}
