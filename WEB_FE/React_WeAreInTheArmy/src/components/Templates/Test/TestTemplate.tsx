import axios from 'axios';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Button from 'src/components/UI/Button';
import Paper from 'src/components/UI/Paper';
import { client } from 'src/util/client';

export default function TestTemplate() {
  console.log(new kakao.maps.services.Places());
  return (
    <div className="w-[900px]">
      <Button
        onClick={() => {
          client
            .post('/api/auth/signup', {
              identifier: 'string tester',
              password: 'string',
              type: 'administrator',
              name: 'string',
              phone: 'string',
              organization: 'string',
              email: 'string@asd.com',
              address: 'string',
            })
            .then((res) => console.log(res));
        }}
      >
        test1
      </Button>
      <Button
        onClick={() => {
          client.get('/', {}).then((res) => console.log(res));
        }}
      >
        test2
      </Button>
    </div>
  );
}
