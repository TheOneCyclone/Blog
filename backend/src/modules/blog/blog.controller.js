const blogSchema= require('./blog.schema');

const getAllBlog=async(req,res)=>{
    return res.send({
        data: await blogSchema.find({}).populate('User','username _id')
    })
}

const createBlog = async(req, res)=>{
    await blogSchema.create({
        title:req.body.title,
        content:req.body.content,
        user: req.body.user
    });
    res.status(200).send("Blog Created")
}

const deleteBlog=async(req,res)=>{

}

module.exports = {
getAllBlog,
createBlog,
deleteBlog
}
