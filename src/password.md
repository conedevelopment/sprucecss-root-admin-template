---
title: "Account"
layout: "layout/account.html"
permalink: "account/password/"
breadcrumbs:
    - caption: "Dashboard"
      url: "/"
    - caption: "Account"
      url: "/account/"
    - caption: "Password"
      url: null
---

<h3>Set up a new password</h3>
<div class="form-group-stack form-group-stack--bordered form-group-container">
    <div class="form-group--row">
        <label class="form-label" for="your-old-password">Old Password</label>
        <input class="form-control" id="your-old-password" name="your-old-password" type="password" />
    </div>
    <div class="form-group--row">
        <label class="form-label" for="your-new-password">New Password</label>
        <input class="form-control" id="your-new-password" name="your-new-password" type="password" />
    </div>
    <div class="form-group--row">
        <label class="form-label" for="your-new-again-password">New Password Again</label>
        <input class="form-control" id="your-new-again-password" name="your-new-again-password" type="password" />
    </div>
</div>
<div class="app-actions">
    <button class="btn btn--primary">Save</button>
    <button class="btn btn--light">Cancel</button>
</div>
