# DEPLOYMENT

When deploying to the server make sure that everything have been tested and run well in local. It's a production server not a toy ! Be carefull and don't be afraid to ask some help if you need !

Please note that the workflow is straightforward if something wrong happen for any reasons. You have to be able to manage it and try to fit as much as possible the workflow.

## Workflow


### Part 1 - Test `develop`
---


### Part 2 - Package it
---

Yes we zip the `node_module` too, you can delete it before but it's not mandatory.

### Part 3 - Clean the server and send zip file :fire:
---


```
### Part 4 - Serve package :fire:
---

1. Go back in the terminal where your ssh connection has been made.

2. unzip `asn-webapp.zip'
```bash
unzip asn-webapp.zip
```

7. Open your favorites webbrowser and go to the URL: 
  try to log in with your starclay account. If you can CONGRATULATION :tada::tada:

8. Test again the website like in `Step 1` if everything is oke.
  
    You successfully deploy the new patch !! :muscle: :fire: :fire: :muscle:

**NOTE:**
There is a script named `server_app.sh` who does the same as `step4` but for the moment do not use it please.

## Authors
* **Junique Virgile** - *Initial contributor* - [Junique Virgile](https://github.com/werayn)
