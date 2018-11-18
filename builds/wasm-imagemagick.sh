
mkdir -p $DEMO_HOME/docs/WASM-ImageMagick
rm -rf $DEMO_HOME/docs/WASM-ImageMagick/*

cd $DEMO_ROOT/WASM-ImageMagick/samples/interactive-execute-context
npm i
npm run all
cp -r static $DEMO_HOME/docs/WASM-ImageMagick/interactive-execute-context

cd $DEMO_ROOT/WASM-ImageMagick/samples/supported-formats
npm i 
npm run all
cp -r static $DEMO_HOME/docs/WASM-ImageMagick/supported-formats
