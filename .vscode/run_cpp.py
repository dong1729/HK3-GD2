"""Build and run a saved single-file C++17 exercise with interactive input."""
import pathlib
import subprocess
import sys

source = pathlib.Path(sys.argv[1]).resolve()
if source.suffix.lower() != '.cpp' or not source.is_file():
    print('Hãy mở và lưu một file .cpp trước khi chạy.', file=sys.stderr)
    sys.exit(1)
binary = source.with_suffix('.out')
result = subprocess.run(['/usr/bin/clang++', '-std=c++17', '-Wall', '-Wextra',
                         '-Wpedantic', str(source), '-o', str(binary)], cwd=source.parent)
if result.returncode:
    sys.exit(result.returncode)
try:
    sys.exit(subprocess.run([str(binary)], cwd=source.parent).returncode)
except KeyboardInterrupt:
    sys.exit(130)
