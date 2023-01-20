# états.
The State Travel Ranker

## Project Overview
The problem that my project solves is to streamline the process of choosing locations (States) in which to travel or potentially relocate.  States are ranked based upon several desirable categories and that ranking is weighted by the user based upon number of matches to said categories.

## Libraries/Packages/Modules
json
bs4
urlopen

## Major Features
About Us
Contact Us
User Signup/Login
Password Reset
State Effective Tax Burden
State Violent/Property Crime Rate
State Median Housing Value/Price 
State Policital Affiliation
Weighted State Ranking

### Essential Features:
User can create an account, login, and change password
User can search states and save rankings by topic (tax, crime, housing, politics) and download/upload to localStorage
User can create a favorites list to download/upload weighted state rankings to localStorage

### Non-Essential Features:
State data updates on a specified time schedule
User must be logged-in to save/share data
User can send saved info via text/email
User can learn more info about states by linking to official state/state travel websites.

## Data Model:
id, user, password, state_name, tax_rate, tax_rank, political_affiliation, median_home_value, home_rank, crime_rate, crime_rank, weighted_rank

## Schedule:
Day 1:  Present capstone proposal to instructor and start Django project/apps.
Days 2 - 5:  Write Django models and views for different apps, including API(s), updating Python from mini-capstone.
Milestone 1 is an MVP which makes API calls to return data from JSON files, parsed HTML from Beautiful Soup, and a web app that the user can use to CRUD data.
Days 6-8:  Build templates and add JavaScript functions and events.
Milestone 2 is an MVP for the user to interact with a fully-functional, albeit ugly, web app. 
Days 11 - 15:  Style project with Bootstrap and CSS.
Milestone 3 is a fully-functional web app for the user to interact with that has pretty styling.
Day 16+:  Deploy web/mobile app.
