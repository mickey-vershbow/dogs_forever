# Dogs Forever App

A simple, fun app for learning abotu different dog breeds.


# Getting Started

- clone with command `npx degit githubusername/githubreponame#branchname projectName`

- cd into new project folder

- run `npm install` to install dependencies

- rename template.env to .env

- make sure to replace MONGODB_URL with a working Mongo URL

- run 'npm start' to start the dev server

- enjoy!


[LIVE LINK](https://houseplant7mv.herokuapp.com/)


# Technologies Used

 - HTML / CSS / Javascript / jQuery
 - Express / EJS / Node.js / MongoDB / Mongoose
 - Styling: Bulma / Google Fonts / ["Colors"](http://clrs.cc/) by [@murmurs](https://github.com/mrmrs)
 - API: ["The Dog API"](https://www.thedogapi.com/)


## Challenges

- Pagination: the 3rd party API only returns 30 objects (out of millions) at a time, and I needed to load multiple pages. At first I approached it by trying to write a function that loaded a new page every time the user clicked "next", but figuring out how to display the new data with DOM manipulation and jQuery became a huge blocker. Eventually Alex showed me how to add a "page number" variable that got incremented and passed into the actual API call every time the user clicked "next", and that was way simpler.

- Styling: I made the mistake of building a multi-column site, and boy do I regret it. All it takes is changing the font size or adding an image to throw all the columns out of whack. I'm now very interested in building single column websites.


## Key Takeaways

- Making initial drafts of trello board, wireframes, and ERD's before I start programming is really essential. It's super easy to end up programming myself into a corner otherwise and having to refactor lots of code as I go. Wireframes also make it much easier to focus on one task at a time because I have a system to keep track of everything that needs to get done overall.

- Keeping projects within a realistic scope (in regard to timeline) is key to actually producing a functional project. A lot of features that I imagined would be simple were, in fact, not simple at all.

- Work on branches, no matter how small the task!

## The IceBox

- Go further with 3rd party API data. Create show pages for all the dogs in the index; access more data properties and display them; give users the option to "save" dogs  from the index to their own collection; create the ability to filter data based on location and/or other conditions.
- Give users the abiilty to add more than one image per dog entry.

