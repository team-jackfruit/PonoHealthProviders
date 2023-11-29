# PonoHealth Providers

*A web application designed to guide uninsured and underinsured individuals in Hawaii to various healthcare options. It aggregates and simplifies information about various healthcare services, providing an easy-to-navigate platform that points users to the most relevant and cost-effective healthcare solutions.*

**Table of Contents**

   - [The Problem](#the-problem)
   - [Overview](#overview)
   - [User Guide](#user-guide)
   - [Developer Guide](#developer-guide)
   - [Deployment](#deployment)
   - [Implementation](#implementation)
   - [Development History](#development-history)
   - [Deployment](#deployment)
   - [Community Feedback](#community-feedback)
   - [Team](#team)

## The Problem

Access to affordable healthcare is a significant issue in Hawaii. Uninsured or underinsured individuals often struggle to find information about healthcare services that they can afford, leading to delayed or no care.

## Overview

*Approach*: *The web application will operate without storing personal user data, ensuring privacy and compliance with regulations. The application will feature:*

* **User Profiles**: Users can indicate their insurance status (insured, uninsured, or underinsured) and their healthcare needs.

* **Directory**: A comprehensive listing of healthcare facilities, services offered, and costs, filterable by various criteria.

* **Resources**: Links to government and non-profit resources for healthcare, as well as links to other healthcare-related websites.

### Mockup Page Ideas
**Landing Page**: Welcomes users to the website and provides a brief mission statement. Lists the main services provided by the website.
<img src="doc/Landing_Page.png">
**Directory Page**: Lists healthcare services, allowing filtering by location, cost, services, and insurance accepted.
<img src="doc/Directory_Page.png">
**Resource Page**: Provides links to government and non-profit resources for healthcare. Also provides links to other healthcare-related websites.
<img src="doc/Resource_Page.png">

## User Guide
**Landing Page**: This page is for the general information of Pono Health Providers.   
<img src="doc/M2/Landing.PNG">   
**Directory Page**: Our directory page features a filter in which a user can utilize to find proper heatlh care facilities based off of the user's preferences.   
<img src="doc/M2/updatedFilter.PNG">
<img src="doc/M2/updatedFilter2.PNG">
<img src="doc/M2/updatedFilter3.PNG">   
**Resource Page**: Users needing more resources can find provided links to government and non-profit websites for healthcare or any other healthcare-related websites.   
<img src="doc/M2/resource.PNG">   
**Sign-In Page**: This page allows users with existing accounts to log in to view their profiles.   
<img src="doc/M2/updatedSignIn.PNG">
<img src="doc/M2/SignedIn.PNG">   
**Sign-Up Page**: Users without an account can sign up here leading to create profile page after submission.   
<img src="doc/M2/updatedSignUp.PNG">   
**Create User Profile Page**: After filling out the required fields, users now have access to their personal profile.   
<img src="doc/M2/createUser.PNG">   
**Profile Page**: This page allows users to view their profile while leaving the option to make changes.   
<img src="doc/M2/Profile.PNG">   
**Edit User Profile Page**: This page allows users to make changes to their profile information.   
<img src="doc/M2/EditUser.PNG">   
**Sign-Out Page**: Users needing more resources can find provided links to government and non-profit websites for healthcare or any other healthcare-related websites.   
<img src="doc/M2/SignOut.PNG">   

## Implementation
### Prerequisites
This application requires the following technologies to be installed:
* [Meteor](https://www.meteor.com/install) for Javascript-based implementation of client and server code.
* [React](https://reactjs.org/) for component-based UI implementation and routing.
* [React Bootstrap](https://react-bootstrap.github.io/) CSS Framework for UI design.
* [Uniforms](https://uniforms.tools/) for React form design and display

### Developer Guide
First, install Meteor.
Second, visit the [Team Jackfruit application github page](https://github.com/team-jackfruit), and click the "Use this template" button to create your own repository initialized with a copy of this application. Alternatively, you can download the sources as a zip file or make a fork of the repo. However you do it, download a copy of the repo to your local computer.

<img src="doc/DevGuide/1.PNG">   

Third, cd into the Opportunity-Finder/app directory and install libraries with:
`$ meteor npm install`
<img src="doc/DevGuide/4.PNG">   

Fourth, run the system with:
`$ meteor npm run start`
<img src="doc/DevGuide/3.PNG">   

If all goes well, the application will appear at [http://localhost:3000](http://localhost:3000).

If you run into issues, try:
`$ meteor npm run reset`

## Development History
### Milestone 1: Project Board
[Milestone 1 Project Board](https://github.com/orgs/team-jackfruit/projects/3)

### Home Page / Landing
Introduction to webpage and services provided.   
<img src="doc/home.PNG">
<img src="doc/home2.PNG">

### Resources
Information on various healthcare options with links to sites.   
<img src="doc/Resources.PNG">
<img src="doc/Resources2.PNG">

### Faq
Page for commonly asked questions.   
<img src="doc/Faq.PNG">

### Filter
Provides user interactive filter to find providers.    
<img src="doc/filter.PNG">
<img src="doc/FilterTest.PNG">

### Data Sample

Snippet of data incorportated into Filter scrapped from [Hawaii.gov](https://health.hawaii.gov/ohca/medicare-facilities/)

```
const healthcareFacilities = [
   {
    category: 'Adult Day Health Centers',
    facilities: [
      {
        number: 1,
        facility: 'Ann Pearl Nursing Facility',
        providerBased: 'X',
        freeStanding: '',
        location: 'Oahu',
        address: '45-181 Waikalua Road, Kaneohe, Hawaii 96744',
        phone: '(808) 247-8558',
        fax: '(808) 247-4115',
        administrator: 'Robin Fortin',
      },
      {
        number: 2,
        facility: 'Arcadia Adult Day Care & Day Health Center at Central Union Church',
        providerBased: '',
        freeStanding: 'X',
        location: 'Oahu',
        address: '1660 South Beretania Street, Honolulu, Hawaii 96826',
        phone: '(808) 440-3020',
        fax: '(808) 440-3084',
        chiefOperatingOfficer: 'Stacey Young',
      }, .....
```

### Milestone 2: 
[M2](https://github.com/orgs/team-jackfruit/projects/5/views/1)

### Milestone 3:
[M3](https://github.com/orgs/team-jackfruit/projects/7)

## Deployment
[PonoHealthProviders](https://ponohealthproviders.com/)

## Community Feedback
***TBD***

## Team
[Team Jackfruit Contract](https://docs.google.com/document/d/1qJgPv2CSdPikN0eX_icKm8f14ZhrNpCa6SEnEY4vdhk/edit?usp=sharing)

PonoHealth Providers is designed, implemented and maintained by
* [Liam (Kula) Van Asperen](https://liamkula.github.io/)
* [Jakapop Khongnawang](https://jakapop1.github.io/)
* [Chad Maeshiro](https://chadmaeshiro.github.io/)
* [Taitusi Vadei](https://tvadei.github.io/)
