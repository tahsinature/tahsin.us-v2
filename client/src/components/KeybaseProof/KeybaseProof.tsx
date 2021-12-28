import React from 'react';

const content = `==================================================================
https://keybase.io/t4h51n
--------------------------------------------------------------------

I hereby claim:

  * I am an admin of https://tahsin.us
  * I am t4h51n (https://keybase.io/t4h51n) on keybase.
  * I have a public key ASD4y1RFyA-cndcxFcgFRNwBTRLJxDEUEYHUAd3xxl2j2Ao

To do so, I am signing this object:

{
  "body": {
    "key": {
      "eldest_kid": "0120f8cb5445c80f9c9dd73115c80544dc014d12c9c431141181d401ddf1c65da3d80a",
      "host": "keybase.io",
      "kid": "0120f8cb5445c80f9c9dd73115c80544dc014d12c9c431141181d401ddf1c65da3d80a",
      "uid": "24928dc231d1e7642977b43f8c027619",
      "username": "t4h51n"
    },
    "merkle_root": {
      "ctime": 1640664430,
      "hash": "7a8030da8c9b47df717d4375674326e4454039b10529b45562d1c9abe25f1fac3fc26f935d62f6dc0072a5ac0d180db2bf2a4de33e05c6989e5211b51da2ee6f",
      "hash_meta": "82954be381bd36ce6f8030e0b1726930bbb676ab55310ab05e0ccc0c1c974966",
      "seqno": 21517462
    },
    "service": {
      "entropy": "2zPH5xxUC1HcrbTWB+kZlqoW",
      "hostname": "tahsin.us",
      "protocol": "https:"
    },
    "type": "web_service_binding",
    "version": 2
  },
  "client": {
    "name": "keybase.io go client",
    "version": "5.9.0"
  },
  "ctime": 1640664457,
  "expire_in": 504576000,
  "prev": "972e6aadf71c2e9b2bb1a5828af13a2549b974c7f6fbe4a1d6cfe35250e620ef",
  "seqno": 34,
  "tag": "signature"
}

which yields the signature:

hKRib2R5hqhkZXRhY2hlZMOpaGFzaF90eXBlCqNrZXnEIwEg+MtURcgPnJ3XMRXIBUTcAU0SycQxFBGB1AHd8cZdo9gKp3BheWxvYWTESpcCIsQgly5qrfccLpsrsaWCivE6JUm5dMf2++Sh1s/jUlDmIO/EIMhFwzLjOAzoaH6DAZUsts4D/+/CiOOekRFJWfHfszc6AgHCo3NpZ8RAl3PMhRqnPQcn+cRu67ZONBB/YFQyIHkVNYB1iVY/WXQir+lM8Ehy6e0viAiFj5x2eLczyFMaXK0EhIUF5QDjA6hzaWdfdHlwZSCkaGFzaIKkdHlwZQildmFsdWXEIIwbTjCxVyMEy0tCS8FQ8UafXvSO+8jUUu1msPf+bVioo3RhZ80CAqd2ZXJzaW9uAQ==

And finally, I am proving ownership of this host by posting or
appending to this document.

View my publicly-auditable identity here: https://keybase.io/t4h51n

==================================================================`;

const KeybaseProof = () => {
  return (
    <>
      <code>{content}</code>
    </>
  );
};

export default KeybaseProof;
