#!/usr/bin/env node

// https://nodejs.org/docs/latest-v14.x/api/process.html#process_process_env
console.log('PATH:', process.env.PATH);
console.log('FOO:', process.env.FOO);

/*
$ ./11-processenv.js 
PATH: /home/zhulei/go/bin:/home/zhulei/workspace/FlameGraph/:/home/zhulei/.vscode-server/bin/cfa2e218100323074ac1948c885448fdf4de2a7f/bin:/home/zhulei/go/bin:/home/zhulei/workspace/FlameGraph/:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/mnt/c/Python39/Scripts/:/mnt/c/Python39/:/mnt/c/Program Files/Common Files/Oracle/Java/javapath:/mnt/c/Program Files (x86)/Microsoft DirectX SDK (August 2007)/Utilities/Bin/x86:/mnt/c/Windows/system32:/mnt/c/Windows:/mnt/c/Windows/System32/Wbem:/mnt/c/Windows/System32/WindowsPowerShell/v1.0/:/mnt/c/Windows/System32/OpenSSH/:/mnt/c/Program Files/Perforce/:/mnt/c/Program Files/TortoiseSVN/bin:/mnt/c/Program Files (x86)/IncrediBuild:/mnt/d/Program Files/MySQL/MySQL Server 5.5/bin:/mnt/d/Program Files/CMake/bin:/mnt/c/Program Files/Git/cmd:/mnt/c/ProgramData/chocolatey/bin:/mnt/d/Program Files/nodejs/:/mnt/c/Program Files/TortoiseGit/bin:/mnt/c/Program Files/Docker/Docker/resources/bin:/mnt/c/ProgramData/DockerDesktop/version-bin:/mnt/c/Users/zhulei/AppData/Local/Microsoft/WindowsApps:/mnt/c/Users/zhulei/AppData/Local/Programs/Microsoft VS Code/bin:/mnt/d/Program Files/LLVM/bin:/mnt/c/Users/zhulei/AppData/Local/BypassRuntm:/mnt/c/Users/zhulei/AppData/Local/Programs/EmEditor:/mnt/d/Program Files/sonar-scanner-4.5.0.2216-windows/bin:/mnt/c/Users/zhulei/AppData/Roaming/npm:/snap/bin:/usr/local/go/bin:/home/zhulei/.local/bin:/usr/local/go/bin:/home/zhulei/.local/bin
FOO: undefined

# 使用了临时环境变量 FOO=bar
$ FOO=bar ./11-processenv.js 
PATH: /home/zhulei/go/bin:/home/zhulei/workspace/FlameGraph/:/home/zhulei/.vscode-server/bin/cfa2e218100323074ac1948c885448fdf4de2a7f/bin:/home/zhulei/go/bin:/home/zhulei/workspace/FlameGraph/:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/mnt/c/Python39/Scripts/:/mnt/c/Python39/:/mnt/c/Program Files/Common Files/Oracle/Java/javapath:/mnt/c/Program Files (x86)/Microsoft DirectX SDK (August 2007)/Utilities/Bin/x86:/mnt/c/Windows/system32:/mnt/c/Windows:/mnt/c/Windows/System32/Wbem:/mnt/c/Windows/System32/WindowsPowerShell/v1.0/:/mnt/c/Windows/System32/OpenSSH/:/mnt/c/Program Files/Perforce/:/mnt/c/Program Files/TortoiseSVN/bin:/mnt/c/Program Files (x86)/IncrediBuild:/mnt/d/Program Files/MySQL/MySQL Server 5.5/bin:/mnt/d/Program Files/CMake/bin:/mnt/c/Program Files/Git/cmd:/mnt/c/ProgramData/chocolatey/bin:/mnt/d/Program Files/nodejs/:/mnt/c/Program Files/TortoiseGit/bin:/mnt/c/Program Files/Docker/Docker/resources/bin:/mnt/c/ProgramData/DockerDesktop/version-bin:/mnt/c/Users/zhulei/AppData/Local/Microsoft/WindowsApps:/mnt/c/Users/zhulei/AppData/Local/Programs/Microsoft VS Code/bin:/mnt/d/Program Files/LLVM/bin:/mnt/c/Users/zhulei/AppData/Local/BypassRuntm:/mnt/c/Users/zhulei/AppData/Local/Programs/EmEditor:/mnt/d/Program Files/sonar-scanner-4.5.0.2216-windows/bin:/mnt/c/Users/zhulei/AppData/Roaming/npm:/snap/bin:/usr/local/go/bin:/home/zhulei/.local/bin:/usr/local/go/bin:/home/zhulei/.local/bin
FOO: bar
*/

const PORT = process.env.PORT || 3000;
console.log('PORT:', PORT);

/*
$ ./11-processenv.js 
PORT: 3000

$ PORT=3001 ./11-processenv.js 
PORT: 3001
*/
