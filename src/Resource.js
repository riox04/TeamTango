class Resources {
    constructor() {
        // the file path is the [key] (like a dictionary)
        this.toLoad = {
            sky: "/sky.png",
            person: "/character_sheet.png",
        };

        // where all the images are kept
        this.images = {};

        // Load each image
        Object.keys(this.toLoad).forEach(key => {
            const img = new Image();
            img.src = this.toLoad[key];
            this.images[key] = {
                image: img,
                isLoaded: false
            }
            img.onload = () => {
                this.images[key].isLoaded = true;
            }
        })
    }
}

// Create one instance for the whole app to use
export const resources = new Resources();