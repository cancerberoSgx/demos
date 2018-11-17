current=`pwd`
cd ../WASM-ImageMagick/samples/interactive-execute-context
npm run all
mkdir -p $current/docs/WASM-ImageMagick
rm -rf $current/docs/WASM-ImageMagick/interactive-execute-context
cp -r static $current/docs/WASM-ImageMagick/interactive-execute-context
cd $current
