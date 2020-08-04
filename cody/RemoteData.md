## Fetching Remote Data
# Querying for remote data
- When the browser parses the DOM tree as it encounters remote files (such as <link /> tags) the browser will request these files (in parallel) but with execute them synchronously (so as to maintain their order they are listed in the source)
- If you want to get data from off-site you make a request for data that not available at launch time to populate data in our app.
- Lucky for us other people have dealt with this problem for a long time and now there is a library call fetch
# Fetch
- to install fetch use npm whatwg-fetch