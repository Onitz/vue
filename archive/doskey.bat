REM Usage: vf commit message -> flushes, adds, commits with first param as message (not delimited with any qutoes)
REM regedit HKEY_CURRENT_USER/Software/Microsoft/Command Processor/AutoRun(string) [dir]\doskey.bat
REM SET gdir=F:\git
SET gdir=F:\Dropbox\projects
doskey vf=F: $T cd %gdir%\vue\archive $T python flush.py "$*" $T cd %gdir%\vue $T git add . $T git commit -m "$*" $T git push
