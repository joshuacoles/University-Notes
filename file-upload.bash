echo $$ > .fus-pid

npx files-upload-server &
ssh -v -R 5000:localhost:8008 -N -o ExitOnForwardFailure=yes -p 8422 apps@joshuacoles.me &
PID=$!
trap 'kill $PID' 1 2 15

wait


