const mongoose = require("mongoose");

const slugify = require("slugify");

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "Please enter a store name"
    },
    slug: String,
    description: {
        type: String,
        trim: true
    },
    tags: [String]

});

shopSchema.pre("save" , (next) => {
    if(!this.isModified("name")) {
        next()
        return;
    }
    this.slug = slugify(this.name);
    next();
})

module.exports = mongoose.model("Shop", shopSchema);