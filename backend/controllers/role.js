import { AccessControl } from 'accesscontrol';

const ac = new AccessControl()

const roles = (function() 
  {
    //Granting user role
    ac.grant("user")
      .readAny(["!users"])
    //Granting admin role
    ac.grant("admin")
      .extend("user")
      .readAny("user")
      .updateAny("user")
 
 
    return ac;
})();

export {
    roles
}