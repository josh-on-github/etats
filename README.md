# *états.*
>travel and relocation preference ranking

![Father travelling with kids](https://user-images.githubusercontent.com/24633211/213829029-8bf1dccf-1b26-4fd4-b063-ad7d9981dbff.jpg)

## Project Overview
The problem that my project solves is to streamline the process of choosing locations (States) in which to travel or potentially relocate.  States are ranked based upon several desirable categories and that ranking is weighted by the user based upon number of matches to said categories.

## Libraries/Packages/Modules
- json
- bs4
- urlopen

## Major Features
- About Page
<!-- - User Signup/Login -->
<!-- - Password Reset -->
- State Effective Tax Burden Page
- State Political Affiliation Page
- State Median Housing Value/Price Page
- State Violent/Property Crime Rate Page
- Weighted State Ranking Page
- Contact Page

### Essential Features
<!-- - User can create an account, login, and change password -->
- User can search states and save rankings by topic (tax, crime, housing, politics) and download/upload to localStorage
- User can create a favorites list to download to their device

### Non-Essential Features
- State data updates on a specified time schedule
- User must be logged-in to save/share data
- User can send saved info via text/email
- User can learn more info about states by linking to official state/state travel websites.

## Data Models

### State Model
- `id` for element index
- `state_name` for state name abbreviation
- `tax_rate` for state effective tax burden
- `tax_rank` for state rank by `tax_rate`
- `political_affiliation` for state political affiliation by party of registered voters, legislative majority, and executive branch
- `median_home_value` for state median home value
- `crime_rate` for state violent/property crime rate by number of incidents per 100,000 people
- `crime_rank` for state rank by `crime_rate`
- `tourism_site` for a hyperlink to a state's official travel/tourism website

### Rank Model
- `weighted_rank` for state rank weighted by number of user matches: <sup>`tax_rate`, `political_affiliation`, `median_home_value`, and `crime_rate`</sup>

## Schedule
**Day 1:**  Present capstone proposal to instructor and start Django project/apps.

**Days 2 - 5:**  Write Django models and views for different apps, including API, updating Python from mini-capstone.

**_Milestone # 1_** is an MVP which makes API calls to retrieve and return state data based upon user input from a web app.

**Days 6-9:**  Build templates and add JavaScript functions and events.

**_Milestone # 2_** is an MVP for the user to interact with a fully-functional, albeit ugly, web app. 

**Days 10 - 15:**  Style project with Bootstrap and CSS.

**_Milestone # 3_** is a fully-functional web app for the user to interact with that has pretty styling.