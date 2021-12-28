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
      "ctime": 1640681032,
      "hash": "43fd3cfd74025a730e535923f488565d52ad696aee5a1257286503642aa1a42c8a9bc9a5446a8c9940107b42cad31633b0bb12e94cd54f999ef646fa8e9882d5",
      "hash_meta": "a67e2a925e710d71c62205a27be750ddfd58adedde42757a2e88da645def42f2",
      "seqno": 21518310
    },
    "service": {
      "entropy": "gl7fPztLKI3Sblud9nYEf3aU",
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
  "ctime": 1640681099,
  "expire_in": 504576000,
  "prev": "671e81bd8eaa81cb7ae38d7b5ac4038ed97470135a432a2830dd9efd9a5cb4f3",
  "seqno": 36,
  "tag": "signature"
}

which yields the signature:

hKRib2R5hqhkZXRhY2hlZMOpaGFzaF90eXBlCqNrZXnEIwEg+MtURcgPnJ3XMRXIBUTcAU0SycQxFBGB1AHd8cZdo9gKp3BheWxvYWTESpcCJMQgZx6BvY6qgct64417WsQDjtl0cBNaQyooMN2e/ZpctPPEIIpfDtFT7mrfN1FqPQptJ8qq/DDJTtfOUYO826CuhMUdAgHCo3NpZ8RA6TN/ZgtwK6reXUPh7tf/ZYAN5QxAPZNyRE+TqbHOau7K8EZWahwpryAMZoFSZT1plnfK34ApoeohgZAlO0P9CKhzaWdfdHlwZSCkaGFzaIKkdHlwZQildmFsdWXEIIo9R1Z1TcFZhVgwwzo1c6y704S30koljXOCQZEahbl+o3RhZ80CAqd2ZXJzaW9uAQ==

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
