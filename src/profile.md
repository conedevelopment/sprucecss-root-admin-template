---
title: "Account"
layout: "layout/account.html"
permalink: "account/profile/"
breadcrumbs:
-
  caption: "Dashboard"
  url: "/"
-
  caption: "Account"
  url: "/account/"
-
  caption: "Profile"
  url: null
---

<h3>Personal Information</h3>
<div class="form-group-stack form-group-stack--bordered form-group-container">
  <div class="form-group--row">
    <label class="form-label" for="your-first-name">First Name</label>
    <input class="form-control" id="your-first-name" name="your-first-name" type="text" value="Adam" />
  </div>
  <div class="form-group--row">
    <label class="form-label" for="your-last-name">Last Name</label>
    <input class="form-control" id="your-last-name" name="your-last-name" type="text" value="Laki" />
  </div>
  <div class="form-group--row">
    <label class="form-label" for="your-email">Email</label>
    <input class="form-control" id="your-email" name="your-email" type="email" value="info@adamlaki.com" />
  </div>
  <div class="form-group--row">
    <label class="form-label" for="your-phone">Phone</label>
    <input class="form-control" id="your-phone" name="your-phone" type="text" value="+36 555 66 44" />
  </div>
  <div class="form-group--row">
    <label class="form-label" for="your-bio">Bio</label>
    <textarea class="form-control" id="your-bio" name="your-bio" rows="4">Hey, I’m Adam! I’m a passionate, accessibility-focused front-end developer. I develop with Gatsby, 11ty, and WordPress. I like to learn and try out new things in my field.</textarea>
  </div>
</div>
<h3>Address</h3>
<div class="form-group-stack form-group-stack--bordered form-group-container">
  <div class="form-group--row">
    <label class="form-label" for="your-country">Country</label>
    <input class="form-control" id="your-country" name="your-country" type="text" value="Hungary" />
  </div>
  <div class="form-group--row">
    <label class="form-label" for="your-city">City/State</label>
    <input class="form-control" id="your-city" name="your-city" type="text" value="Budapest" />
  </div>
  <div class="form-group--row">
    <label class="form-label" for="your-postal-code">Postal Code</label>
    <input class="form-control" id="your-postal-code" name="your-postal-code" type="text" value="H-1900" />
  </div>
</div>
<div class="app-actions">
  <button class="btn btn--primary">Save</button>
  <button class="btn btn--light">Cancel</button>
</div>
