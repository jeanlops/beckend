const mongoose = require("mongoose");


const File = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        path: {
            type: String,
            require: true,
        },

    },
    {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
);

File.virtual("url").get(function() {
const url = process.env.url || `http://localhost:3333`

    return `/file/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", File);