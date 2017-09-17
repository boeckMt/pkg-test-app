![](https://raw.githubusercontent.com/zeit/art/39a6d9ad77606e2589ddd620b23e093d3b3c6195/pkg/repo-banner.png)

- simple example of a [express.js](http://expressjs.com/de/) app bundle with [pkg](https://github.com/zeit/pkg/)
- creates a bundled server from server/index and serves files from dist
- name and assets from the package.json 

## create pkg
- $ pkg server/index.js -t node6-linux -c package.json
- $ pkg server/index.js -t node6-win -c package.json

## run server
- $ ./pkg-test-bin
- $ pkg-test-bin.exe  
