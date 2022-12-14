import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { client } from 'src/util/client';
import Button from '../../UI/Button';
import FlexContainer from '../../UI/FlexContantainer';
import Input from '../../UI/Input';
import Paper from '../../UI/Paper';
import Text from '../../UI/Text';
import Select from '../../UI/Select';
import Option from 'src/components/UI/Option';
import { Modal } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

// {
//   "identifierentifier": "string",
//   "password": "string",
//   "type": "string",
//   "name": "string",
//   "phone": "string",
//   "organization": "string",
//   "email": "string",
//   "address": "string"
// }
export default function SignupTemplate() {
  const [open, setOpen] = useState<boolean>(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const handleSubmitSignup = () => {
    client
      .post('/api/auth/signup', {
        identifier,
        password,
        type,
        name,
        phone,
        organization,
        email,
        address,
      })
      .then((res) => console.log(res));
  };
  const [identifier, setIdentifier] = useState<string>('');
  const handleChangeidentifier = (newidentifier: string) => {
    setIdentifier(newidentifier);
  };

  const [password, setPassword] = useState<string>('');
  const handleChangePassword = (newPassword: string) => {
    setPassword(newPassword);
  };

  const [type, setType] = useState<string>('');
  const handleChangeType = (newtype: string) => {
    setType(newtype);
  };

  const [name, setName] = useState<string>('');
  const handleChangeName = (newName: string) => {
    setName(newName);
  };

  const [phone, setPhone] = useState<string>('');
  const handleChangePhone = (newPhone: string) => {
    setPhone(newPhone);
  };

  const [organization, setOrganization] = useState<string>('');
  const handleChangeOrganization = (newOrganization: string) => {
    setOrganization(newOrganization);
  };

  const [email, setEmail] = useState<string>('');
  const handleChangeEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  const [address, setAddress] = useState<string>('');
  const handleChangeAddress = (newAddress: string) => {
    setAddress(newAddress);
  };

  const naviate = useNavigate();
  const [timer, setTimer] = useState<number>(3);
  console.log(timer);
  useEffect(() => {
    const time = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    if (timer === 0) {
      naviate('/login');
    }
    return () => clearInterval(time);
  }, [open]);

  return (
    <FlexContainer className="mt-[50px]">
      <Paper className="w-[900px] h-[700px] justify-evenly">
        <div className="w-full text-center mt-5">
          <Text size="text-3xl" className="font-bold">
            ????????????
          </Text>
        </div>
        <span className="w-full p-0.5 bg-slate-200 my-5"></span>

        <FlexContainer className="flex-col h-[600px] ">
          <FlexContainer className="h-full">
            <FlexContainer className="flex-col h-full justify-evenly mr-10">
              <Text
                size="text-base"
                className="mr-5 font-bold h-[50px] leading-12"
              >
                ?????????
              </Text>
              <Text
                size="text-base"
                className="mr-5 font-bold h-[50px] leading-12"
              >
                ????????????
              </Text>
              <Text
                size="text-base"
                className="mr-5 font-bold h-[50px] leading-12"
              >
                ??????
              </Text>
              <Text
                size="text-base"
                className="mr-5 font-bold h-[50px] leading-12"
              >
                ??????
              </Text>
              <Text
                size="text-base"
                className="mr-5 font-bold h-[50px] leading-12"
              >
                ????????????
              </Text>
              <Text
                size="text-base"
                className="mr-5 font-bold h-[50px] leading-12"
              >
                ??????
              </Text>
              <Text
                size="text-base"
                className="mr-5 font-bold h-[50px] leading-12"
              >
                ?????????
              </Text>
              <Text
                size="text-base"
                className="mr-5 font-bold h-[50px] leading-12"
              >
                ??????
              </Text>
            </FlexContainer>
            <FlexContainer className="flex-col h-full justify-evenly">
              <Input
                value={identifier}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangeidentifier(event.target.value)
                }
                type="text"
                placeholder="?????????"
                className="w-[400px] h-[50px] "
              />
              <Input
                value={password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangePassword(event.target.value)
                }
                type="password"
                placeholder="Password (??????, ??????, ???????????? ?????? 8??? ??????)"
                className="w-[400px] h-[50px] "
              />
              <Select
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setType(e.target.value)
                }
              >
                <Option value="administrator">?????????</Option>
                <Option value="citizen">?????????</Option>
                <Option value="millitary">??????</Option>
                <Option value="default">??????</Option>
              </Select>
              <Input
                value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangeName(event.target.value)
                }
                type="text"
                placeholder="????????? ??????????????????"
                className="w-[400px] h-[50px] "
              />
              <Input
                value={phone}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangePhone(event.target.value)
                }
                type="tel"
                placeholder="????????????"
                className="w-[400px] h-[50px] "
              />
              <Input
                value={organization}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangeOrganization(event.target.value)
                }
                type="text"
                placeholder="?????? ????????? ??????????????????."
                className="w-[400px] h-[50px] "
              />
              <Input
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangeEmail(event.target.value)
                }
                type="email"
                placeholder="gundaemin@mnd.com"
                className="w-[400px] h-[50px] "
              />
              <Input
                value={address}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangeAddress(event.target.value)
                }
                type="text"
                placeholder="????????? ??????????????????."
                className="w-[400px] h-[50px] "
              />
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer className="flex-col justify-center ">
          <Button
            size="base"
            className="mb-3"
            onClick={() => {
              handleSubmitSignup();
              handleModalOpen();
            }}
          >
            ????????????
          </Button>
        </FlexContainer>
      </Paper>
      <Modal show={open} size="md" popup={open} onClose={handleModalClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">??????????????? ?????????????????????. </div>
          <div className="text-center">
            {timer}??? ??? ????????????????????? ???????????????.{' '}
          </div>
        </Modal.Body>
      </Modal>
    </FlexContainer>
  );
}
