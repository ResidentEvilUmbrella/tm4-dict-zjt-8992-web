module.exports={
    publicPath:"/tm4-dict-zjt-8992",
    lintOnSave:true,
    productionSourceMap:false,
    devServer:{
        //host:"localhost",
        port:8081,
        proxy:{
            "/tm4-dict-zjt-8992":{
                ws:false,
                target:"http://localhost:8080/",
                changeOrigin:true,
                pathRewrite:{
                    '^/api':"/tm4-dict-zjt-8992"
                }

            }
        }
    }
}