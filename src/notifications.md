---
title: "Account"
layout: "layout/account.html"
permalink: "account/notifications/"
breadcrumbs:
    - caption: "Dashboard"
      url: "/"
    - caption: "Account"
      url: "/account/"
    - caption: "Notifications"
      url: null
---

<h3 class="app-card__section-heading">Notifications</h3>
<div class="form-group-stack form-group-stack--bordered form-group-container">
    <fieldset>
        <div class="form-group--row" style="--gap: 1rem 3rem; --label-inline-size: 15rem; align-items: start;">
            <legend>
                Email notifications
                <span style="color: var(--spruce-base-color-text); display: block; font-weight: 400;">Configure tools that integrate with Code Scanning to keep the quality of your code under control.</span>
            </legend>
            <div class="form-group form-group--vertical-check">
                <label class="form-switch" style="align-items: start;">
                    <input class="form-switch__control" type="checkbox" value="true" checked/>
                    <span class="form-label form-switch__label">
                        News and updates
                        <span style="color: var(--spruce-base-color-text); display: block;">Quam at orci ullamcorper fringilla.</span>
                    </span>
                </label>
                <label class="form-switch">
                    <input class="form-switch__control" type="checkbox" value="true" checked/>
                    <span class="form-label form-switch__label">Tips and tutorials</span>
                </label>
                <label class="form-switch">
                    <input class="form-switch__control" type="checkbox" value="true"/>
                    <span class="form-label form-switch__label">Comments</span>
                </label>
                <label class="form-switch">
                    <input class="form-switch__control" type="checkbox" value="true"/>
                    <span class="form-label form-switch__label">Reminders</span>
                </label>
            </div>
        </div>
    </fieldset>
    <fieldset>
        <div class="form-group--row">
            <legend>Push notifications</legend>
            <div class="form-group form-group--vertical-check">
                <label class="form-switch">
                    <input class="form-switch__control" type="checkbox" value="true"/>
                    <span class="form-label form-switch__label">News and updates</span>
                </label>
                <label class="form-switch">
                    <input class="form-switch__control" type="checkbox" value="true"/>
                    <span class="form-label form-switch__label">Tips and tutorials</span>
                </label>
                <label class="form-switch">
                    <input class="form-switch__control" type="checkbox" value="true" checked/>
                    <span class="form-label form-switch__label">Comments</span>
                </label>
                <label class="form-switch">
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
