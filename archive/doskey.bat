REM Usage: vf "Commit message" -> flushes, adds, commits with first param as message (delimited with double quotes)
REM regedit HKEY_CURRENT_USER/Software/Microsoft/Command Processor/AutoRun(string) [dir]\doskey.bat
REM SET gdir = F:\git
REM SET gidr = F:\Dropbox\projects
REM doskey vf=F: $T cd %gdir%\vue\archive $T python flush.py $T cd %gdir%\vue $T git add . $T git commit -m "$1" $T git push
REM the above broke multiline
doskey vf=F: $T cd F:\Dropbox\projects\vue\archive $T python flush.py $T cd F:\Dropbox\projects\vue $T git add . $T git commit -m $1 $T git push
