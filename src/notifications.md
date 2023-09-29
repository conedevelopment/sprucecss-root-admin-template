---
title: "Account"
layout: "layout/account.html"
permalink: "account/notifications/"
breadcrumbs:
-
  caption: "Dashboard"
  url: "/"
-
  caption: "Account"
  url: "/account/"
-
  caption: "Notifications"
  url: null
---

<h3>Notifications</h3>
<div class="form-group-stack form-group-stack--bordered form-group-container">
  <fieldset>
    <div class="form-group--row form-group--row:vertical-start" style="--spruce-gap: 1rem 3rem; --spruce-label-inline-size: 14rem;">
      <legend>
        Email notifications
        <span class="form-description">Configure tools that integrate with Code Scanning to keep the quality of your code under control.</span>
      </legend>
      <div class="form-group form-group--vertical-check">
        <label class="form-switch form-switch--vertical-start">
          <input class="form-switch__control" type="checkbox" value="true" checked/>
          <span class="form-label form-switch__label">
            News and updates
            <span class="form-description">Quam at orci ullamcorper fringilla.</span>
          </span>
        </label>
        <label class="form-switch form-switch--vertical-start">
          <input class="form-switch__control" type="checkbox" value="true" checked/>
          <span class="form-label form-switch__label">Tips and tutorials</span>
        </label>
        <label class="form-switch form-switch--vertical-start">
          <input class="form-switch__control" type="checkbox" value="true"/>
          <span class="form-label form-switch__label">Comments</span>
        </label>
        <label class="form-switch form-switch--vertical-start">
          <input class="form-switch__control" type="checkbox" value="true"/>
          <span class="form-label form-switch__label">Reminders</span>
        </label>
      </div>
    </div>
  </fieldset>
  <fieldset>
    <div class="form-group--row form-group--row:vertical-start" style="--spruce-gap: 1rem 3rem; --spruce-label-inline-size: 14rem;">
      <legend>
        Push notifications
        <span class="form-description">Praesent lobortis imperdiet mattis.</span>
      </legend>
      <div class="form-group form-group--vertical-check">
        <label class="form-switch form-switch--vertical-start">
          <input class="form-switch__control" type="checkbox" value="true"/>
          <span class="form-label form-switch__label">News and updates</span>
        </label>
        <label class="form-switch form-switch--vertical-start">
          <input class="form-switch__control" type="checkbox" value="true"/>
          <span class="form-label form-switch__label">Tips and tutorials</span>
        </label>
        <label class="form-switch form-switch--vertical-start">
          <input class="form-switch__control" type="checkbox" value="true" checked/>
          <span class="form-label form-switch__label">
            Comments
            <span class="form-description">Praesent congue eu ex quis bibendum.</span>
          </span>
        </label>
        <label class="form-switch form-switch--vertical-start">
          <input class="form-switch__control" type="checkbox" value="true"/>
          <span class="form-label form-switch__label">Reminders</span>
        </label>
      </div>
    </div>
  </fieldset>
</div>

<div class="app-actions">
  <button class="btn btn--primary">Save</button>
  <button class="btn btn--light">Cancel</button>
</div>
