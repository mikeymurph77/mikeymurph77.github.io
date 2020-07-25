---
title: Why Gatsby
date: "2020-07-20T23:12:04.284Z"
description: "I mentioned how Gatsby led me to scrap my other site and build a brand new one from the ground up. Here's my reasoning."
type: blog
---

In my previous post, I mentioned how Gatsby led me to scrap my other site and build a brand new one from the ground up. Here's my reasoning.

With the growth in JAMstack applications, static site generators could be entering a new heyday. But before we get into Gatsby, let me quickly introduce the JAMstack.

## What is the JAMstack
<p align="center">
  <img src="https://res.cloudinary.com/dtghgjg3i/image/upload/v1595279600/gatsby-personal-site/blog-posts/jamstack_knaqbl.jpg" />
</p>

> The Jamstack is not about specific technologies. It's a new way of building websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience.

Simply put, the JAMstack is a methodology that does not depend on a web server but uses **J**avascript, **A**PIs, and **M**arkup to build sites.

Because there is no server needed to host a JAMstack site, projects can be served directly from a CDN. Any dynamic data that render to the page comes from external APIs. Thus projects built using the JAMstack are lightning-fast, consequently giving the user a much better experience.

In recent years JAMstack sites have been growing in popularity and used in very creative ways extending far past the traditional static website.

Now that we have a rudimental understanding of the JAMstack, let's talk about Gatsby!

## What is Gatsby?
<p align="center">
  <img src="https://res.cloudinary.com/dtghgjg3i/image/upload/v1595280013/gatsby-personal-site/blog-posts/gatsby_wyfiaj.png" />
</p>

> A free and open-source framework based on React that helps developers build blazing-fast websites and apps

In my opinion, the above statement does not give Gatsby enough credit for what it truly is. Built using the JAMstack methodology, Gatsby has all the benefits that the JAMstack offers, plus more. Built using React, the Gatsby framework allows your site to go beyond the traditional static site. Your website could be a full-blown dynamic web application if you so much desire.

The Gatsby framework also utilizes GraphQL to manage the application's data layer. In Gatsby, data is anything that gets passed to a React component (files, images, strings, numbers, etc.). If you want to retrieve anything from your site, like the site's metadata, or get all your blog posts, you can use GraphQL to retrieve the data you want to display.

## Why I Chose Gatsby
Below is a shortlist of selling points that led me to use Gatsby for my site. It is by no means a comprehensive list, but I feel that these points will resonate with most people.

#### Great Documentation 📝

When I first heard of Gatsby, I followed their [introduction tutorial](https://www.gatsbyjs.org/tutorial/). A few hours later, I was ready to start building sites confidently on my own. Anything else that I wanted to learn or look up was easily accessible from their documentation. There is nothing more frustrating than jumping into an exciting project with little to no documentation, but Gatsby had everything perfectly organized, which made learning the framework a breeze.

#### Lightning Fast ⚡

On the surface, Gatsby's stack features React and GraphQL, so it's not surprising that the sites appear fast. But when you look at what the Gatsby team does behind the scenes when your project builds, you'll see just how serious performance is to them. From automated code-splitting, image optimization, inlining critical styles, lazy-loading, and prefetching resources, the Gatsby team covers most of the manual tuning other frameworks require you to tweak.

At the time of writing this post, here are the Lighthouse scores for this site.
<p align="center">
  <img src="https://res.cloudinary.com/dtghgjg3i/image/upload/v1595289283/gatsby-personal-site/blog-posts/lighthouse-100_jxc1tk.png" />
</p>


#### Active and Large Community 👥

Gatsby has been around for a few years now, and though reading GitHub stars is not the most scientific measuring tool, the Gatsby repo has over 45K stars! A better measurement might be the 222k projects using Gatsby, or even the 3.4K contributors to the project. These are some staggering numbers, and with numbers this large, you are likely to have a strong community to learn from and keep the project alive for years to come.

#### Easily Customizable 🏗️

In case I haven't mentioned this enough yet, React is fundamental when it comes to Gatsby. Because of that, Gatsby allows you to create completely customizable and reusable components throughout your site. As a React developer, this is exciting for me. Gone are the days of being limited to the features included with the theme I downloaded. If I want to build a social sidebar widget, nothing is preventing me from doing so. If I want to change any part of the site, large or small, I am in complete control. This kind of development is very liberating compared to past sites I've built, which felt like pulling teeth with any change I wanted to implement.

Secondly, Gatsby offers any plugin you might ever need. This extensible library of plugins is primarily due to the sizeable open-source community Gatsby has amassed over the years. So for those less inclined to build everything yourself, or if you're looking to bootstrap a site, these plugins are straightforward to include and require little work.

## Alternatives to Gatsby
Yes, Gatsby quickly became a favorite of mine, but there are many other frameworks out there, and it's best to find the one that will be of most use for **YOU**! Here is a short list matched with the relevant technology you'd likely use with it.
- [VuePress](https://vuepress.vuejs.org/) - Written in Vue
- [Hugo](https://gohugo.io/) - Written in Go
- [Snapper](https://github.com/sveltejs/svelte) - Written in Svelte
- [Next.js](https://nextjs.org/) - Written in React
- [Jekyll](https://jekyllrb.com/) - Written in Ruby
