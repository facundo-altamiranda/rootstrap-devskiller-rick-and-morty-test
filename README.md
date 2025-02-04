# Rootstrap's React Code Challenge

> [!IMPORTANT]
>
> - This project was bootstraped with Nextjs 14 which **requires node 18.17 or higher**. Make sure you meet this dependency since the project won't build otherwise.
> - To **submit your project** you can either use the **Git repository** option or **upload a ZIP** version of the code. It is important that you use the command `yarn zip` or `npm run zip` to generate it. Just zipping it up yourself will create a file that it is too big to upload.

# Development Challenge

We are building a Ricky and Morty Character Wiki. We went ahead and got started but we need your help to make it awesome.

## Task objective

We are leveraging the [Rick and Morty REST API](https://rickandmortyapi.com/documentation) to make a web app. In short, as a user I should be able to search characters by name and view their character details. Responsive design and intuitive navigation is also key.

Some of what is mentioned above is already implemented but might need some tweaking to get it production ready. Other things you'll need to add from scratch.

## Product Requirements

To be more clear about what we want this web app to have we have outlined the product requirements.

### Search Characters

As a user I should be able to seach characters by name and get a list of all matching characters.

- For each character I should see a tile with their name and image with a link to that character's detail.
- This list should be paginated since there could be a lot of matches.
- It should display the total number of results as well.

**Note:** Most of this is implemented! But is it working as per the requirements? Help us get the feature there.

### View Character Details

As a user I should be able to view the details of a character.

- The information about the character to be displayed should be:
  - Name
  - Image
  - Status (Alive, Dead, Unknown)
  - Species
  - Gender
  - Origin
  - Location
- Design of the page is up to you, our designer is on vacation. We don't need anything fancy ;D

### Non-functional Requirements

- The pages should be responsive.
  - Make sure to test all pages in various screen sizes.

## Before you start coding

The project is in Nextjs but you don't need to know it to complete the challenge.

### Page locations in the code

You can find the code for the search page at:

```
/app/page.tsx
```

And the skeleton file for the character details page at:

```
/app/[slug]/page.tsx
```

It is expected that you make a call to the API to get the details of the specific character.

### Styling

For this project we chose to use [Tailwind CSS](https://tailwindcss.com/) since it is our preferred styling method. That being said we understand that the web styling landscape is very diverse and not everyone might be familiar with this tool.

Feel free to use something else to finish the styling. Css Modules should work out of the box. In case it is useful, here is a [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

## How to run the project

Install dependencies with:

```bash
yarn install
# or
npm install
```

**Note:** if you use yarn you will take advantage of the `yarn.lock` file

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## We encourage you to:

### Complete development

Finish all the application functionalities according to the requirements specified above.

### Audit the project

Now that you have helped us finish the web app we want your help with something else. Turns out that we were in a rush and there are some areas that could be improved.
Can you help us identify things that could be improved in the following areas?

- User experience
- Development practices
- Code Structure
- Performance (Hint: images)

Please list your improvement recommendations in the file `/ImprovementSuggestions.md`. We have provided a structure to guide you. Please also assign a level of priority to each recommendation (High/Medium/Low).

**Note:** It is not required but if you have time and want to fix some of the issues you found you are more than welcomed.
