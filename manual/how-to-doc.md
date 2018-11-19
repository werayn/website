# Documentation

## Prerequisites

For the documentation we use [ESdoc](https://esdoc.org/).
Esdoc use jsdoc and generate our documentation.

If you doesn't know jsdoc please go to [jsdoc](http://usejsdoc.org/) or [esdoc tag](https://esdoc.org/manual/tags.html)

## How to document

### class

an example is faster :

```` javascript
/**
 * RootRouter component
 * @class RootRouter
 * @reactProps {bool} isConnected - user is connected or not
 * @reactProps {bool} onboardingCompleted - if is connected and user as completed is onboarding
 * @reactProps {List} addresses - List immutable des addr de notre user
 * @reactProps {Map} anonnymousAddress - If user is anonym this immutable Map is define with his delivery addr
 * @reactProps {object} location - For CSS animation
 * @reactProps {function} getMe - Me actions who refresh me state
 * @reactProps {function} removeAddress - Anonymous action for remove anonym addr if isConnected
 * @desc Entry point of the main router to dispatch route with reactRouter
 * @extends {React.Component}
 * @public
 * @version 1.0
 * @since 1.0
 */
````

### Constructor

in the constructor we always redefine our props and we add the local variable in the state like temporary input

````javascript
        /**
         * @private
         * @constant state - component state
         * @desc react state component
         * @property {bool} valid - true is code is valid for css animation
         * @property {number} CounterTime - CounterTime before resend code
         * @property {number} retry - number of retry resend code possible after logout
         * @property {bool} resend - allow user to click under the resend button
         * @property {string} phone - user phone number
         * @property {bool} isPending - if auth/verify is pending
         * @property {bool} onboardingCompleted - if user have already done is onboarding (cgu + credential)
         * @property {bool} isConnected - if user is connected
         * @property {object} error - fulfilled if auth/verify failed
         * @property {List} addresses - user addresses in DB , is immutable List
         * @version 1.0
         * @since 1.0
         */
````

### Method

simple and fast

````javascript
    /**
     * @async
     * @method handleResend - call /auth
     * @desc resend code if user click on it and timer is over with the last credential
     * is async because getDeviceCredential need to be await for fingerPrintjs
     * @version 1.0
     * @since 1.0
     * @private
     */
````

### function

````javascript
/**
 * @function authMiddleware
 * @desc Handle auth error and refresh token
 * @public
 * @version 1.0
 * @since 1.0
 * @public
 * @param {object} store redux store object
 * @returns {action} method
 * @property {action} - return the dispatch action from redux
 */
````

### Constant static Variable

You doesn't need to specify if is static but only when is constant with the tag `@const` or `@constant`

```javascript
/**
 * @constant actionTypesToIgnore - action type
 * @desc every type action to ignore
 * @version 1.0
 * @since 1.0
 * @private
 */
```

### PropTypes or defaultProps

you can paste this example or re-write if you want but it's always the same because props is always define in the class description as above

````javascript
    /**
     * propTypes - define props
     * @desc define props required or not
     * @version 1.0
     * @since 1.0
     * @private
     */
````

or :

````javascript
    /**
     * defaultProps - define default value props
     * @desc define not required props
     * @private
     * @version 1.0
     * @since 1.0
     */
````

### Lifecycle method

it's generic comment but necessary to explain the method `componentDidUpdate()` at example.

And for documentation coverage.

An example here for `getDerivedStateFromProps()`

````javascript
    /**
     * @private
     * @method getDerivedStateFromProps - react lifecycle method
     * @desc is invoked right before calling the render method, both on the initial mount and on subsequent updates
     * It should return an object to update the state, or null to update nothing.
     * @param {object} nextProps - new props updated
     * @param {object} prevState - last state value
     * @return {object} mutableProps
     * @version 1.0
     * @since 1.0
     */
````

or here for `componentDidUpdate()` :

````javascript
    /**
     * @method componentDidUpdate - react lifecycle method when an update occur in the component
     * @desc handle next step of the login process (if new go onboarding if not got home)
     * @version 1.0
     * @since 1.0
     * @private
     */
````

and for `mapDispatchToProps

````javascript
    /**
     * @function mapDispatchToProps - redux method
     * @desc make action available in the props component.
     * @param {object} dispatch - redux-thunk dispatcher
     * @return {object} AuthActions
     * @version 1.0
     * @since 1.0
     * @private
    */
````

## WARNING

EVERY FILE HAVE TO BE A FULLY COVERAGE please check /source in the doc

### propTypes declaration

Please end your propTypes and default propTypes declaration with `;`

### Description

tag `@description` doesn't work with ESdoc you have to use `@desc``

### Version

You always have to specify the `@version` and `@since` tag.

### Private / Public

Don't forget to specify this with `@public` or `@private``

### PropsTypes

To specify props into the right tab for the documentation generation please use `@reactProps` tag

example :

````javascript
/**
 *  @reactProps {type} name - description
 */
````

this tag works only into class comment so every component who will need props have to be a class.
