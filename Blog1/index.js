const express = require("express")
const connection = require("./database/database")
const app = express();
const session = require("express-session")
const connections = require("./database/database")

const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticleController")
const usersController = require("./users/UsersController")

const Article = require("./articles/Article")
const Category = require("./categories/Category")
const User = require("./users/User")

//view engine 
app.set('view engine', 'ejs');


//sessions

app.use(session({
    secret:"qualquercoisa", cookie: { maxAge: 300000}
}))


//static 
app.use(express.static('public'))

//Body parser 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//databse
connection
    .authenticate()
    .then(()=> {
        console.log('Conexão feita com sucesso!')
    }).catch((error)=> {
        console.log('Error')
    })


app.use("/",categoriesController);
app.use("/", articlesController);
app.use("/",usersController);





app.get("/",(req, res) => {
    
    Article.findAll({
        order:[
            ['id','DESC']
        ],
        limit: 4
    }).then(articles=>{
        Category.findAll().then(categories=>{
            res.render("index",{articles: articles, categories: categories});
        })        
    })    
})

app.get("/:slug",(req,res) => {
    var slug = req.params.slug;
    Article.findOne({
        where:{
            slug: slug
        }
    }).then(article=>{
        if(article != undefined){
            Category.findAll().then(categories=>{
                res.render("article",{article: article, categories: categories});
            })        
        }else{
            res.redirect("/");
        }
    }).catch( erro =>{
        res.redirect("/")
    })
})


app.get("/category/:slug",(req,res)=>{
    var slug = req.params.slug
    Category.findOne({
        where:{
            slug: slug
        },
        include:[{model: Article}]
    }).then(category=>{
        if(category != undefined){

            Category.findAll().then(categories=>{
                res.render("index",{articles:category.articles,categories: categories})
            })


        }else{
            res.redirect("/")
        }
    }).catch(err => {
        res.redirect("/")
    })
})


app.listen(8080,() => {
    console.log("O servidor está rodando")
})