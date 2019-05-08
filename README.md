# All-the-News-That-s-Fit-to-Scrape
`All the News That's Fit to Scrape` is an application that lets users scrape news articles from NPR.com. Users can then view and leave comments on saved articles. This app uses Cheerio to scrape news from NPR and stores them in MongoDB using Mongoose.
Please Click on this [link](https://calm-hamlet-55340.herokuapp.com/) to Check the App out.

## Technologies

| Frontend  | Backend |
| ------------- | ------------- |
| HTML | Nodejs |
| CSS (SASS) | Express |
| Javascript (jQuery) | MongoDB (Mongoose)|
| Materialize | Cheerio (Web Scrapper) |
|Handlebars (Templating Engine)|


Deployed on: `Heroku`

## Usage

- Click on the "Scrape" Add Icon at the Upper Right Hand Corner to Scrape News Articles from NPR News.

- Click on Add Symbol on the Individual Articles to Store the Article in MongoDB.

- Click on "Saved Articles" to bring up a List of Saved Articles.

- Click on the Article to Bring Up a Pop up Modal for Viewing and Submitting Comments Pertaining to the Article.

- Click on the "Trash" Icon / Delete to Delete the Article / Comment.


## Requirements
- Web Browser
- Nodejs
- Mongo DB

## Installation

`All the News That's Fit to Scrape` can be downloaded by cloning this repository [`https://github.com/roverkim/Be-My-Friend-Finder.git`](https://github.com/roverkim/Be-My-Friend-Finder.git)
A Live Example can be Found Here
[`https://calm-hamlet-55340.herokuapp.com/`](https://calm-hamlet-55340.herokuapp.com/)

After installation, open node, navigate to the file and run `npm install`.

To run `All the News That's Fit to Scrape` locally, Please Ensure that MongoDB is Running.

- Proceed to `controller/webScrapperController.js` and Update the Following Code
```
mongoose.connect("Your DB Connection Goes Here", { // Connect to the Mongo DB
  useMongoClient: true
});

```