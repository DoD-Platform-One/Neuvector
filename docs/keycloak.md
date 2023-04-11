# Neuvector Keycloak Configuration

This document outlines how to set up a Keycloak client for use with Neuvector and the neccesary configuration for connecting the client.

## Keycloak Configuration

### Create a Neuvector Client 
  - The Client ID, name and description can be whatever you want, make note of the Client ID
  - Change the following configuration items
    - Enable client authentication (confidential access type)
    - Direct Access Grants Enabled: Off
    - Valid Redirect URIs: https://neuvector.${DOMAIN}/openId_auth
    - Base URL: https://neuvector.${DOMAIN}
  - Take note of the client secret in the credentials

### Configure Neuvector Role Mapper

In order to use roles from Keycloak, Neuvector needs a claim on the ID Token or the Userinfo endpoint that enumerates the client roles. This can be mapped in a variety of ways, but a simple way to do this is to use the dedicated client scope that gets created for new clients named `${ClientID}-dedicated`. 

* Navigate to the client details for your created Neuvector client, click on the **Client scopes** tab and find the `${ClientID}-dedicated` assigned client scope and click on it to open the details.

* With the dedicated client scope details open, click **Add predefined mapper** and select the row named `client roles` and click add.

* Once added, you should see a list of mappers associated with the client scope, with a single mapper listed named `client roles`.  Cliek on the mapper name to configure the details.

* For the `client roles` mapper 
  - Set the Client ID to the Client ID of your Keycloak client. 
  - Change `Token Claim Name` from `resource_access.${client_id}.roles` to `roles`.
  - Enable `Add to userinfo`
  - Save

* To create the approprate client roles navigate back to the Keycloak Client details page and click on the Roles tab.
  - Click Create Role
  - Enter `admin` for the Role Name
  - Enter `Neuvector Admin Role` for the Role description

* Repeat for Reader role
  - Click Create Role
  - Enter `reader` for the Role Name
  - Enter `Neuvector Reader Role` for the Role description

* At this point you can assign client roles to the appropriate users by navigating to the user details of a particular user and navigating to the **Role mapping** tab.

## Configure Neuvector Values

The following values are required to leverage the newly created Keycloak client. Use the Client ID and Client Secret from above to populate the OIDC configuration.

Make note that below we are adding `group_claim: roles`, which tells Neuvector to read from the mapped `roles` claim to determine which groups the user should be a part of. 

In addition `group_mapped_roles` enumerates specific roles to map to specific groups.  In the examples below `group` is the name of the role in the `roles` claim which comes from Keycloak, and `global_role` is the name of the group in Neuvector. 

`admin` and `reader` are the default roles created by Neuvector.

```yaml
neuvector:
  enabled: true

  sso:
    enabled: true
    client_id: neuvector
    client_secret: <client secret>
    default_role: null
    issuer: https://keycloak.bigbang.dev/auth/realms/baby-yoda

  # additional mapping required to map Keycloak roles/groups to Neuvector groups 
  values:
    controller:
      secret:
        data:
          oidcinitcfg.yaml:
            group_claim: roles # claim in token to pull groups from
            # list of groups to map to Neuvector global roles 
            group_mapped_roles:
              - group: admin 
                global_role: admin 
              - group: reader
                global_role: reader
```

