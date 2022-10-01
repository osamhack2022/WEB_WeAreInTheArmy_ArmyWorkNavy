import { useState } from 'react';
import Button from '../../UI/Button';
import FlexContainer from '../../UI/FlexContantainer';
import Input from '../../UI/Input';
import Paper from '../../UI/Paper';
import Text from '../../UI/Text';

export default function SignupTemplate() {
  const [id, setId] = useState<string>('');
  const handleChangeId = (newId: string) => {
    setId(newId);
  };

  const [password, setPassword] = useState<string>('');
  const handleChangePassword = (newPassword: string) => {
    setPassword(newPassword);
  };

  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const handleChangePasswordCheck = (newPasswordCheck: string) => {
    setPasswordCheck(newPasswordCheck);
  };

  const [email, setEmail] = useState<string>('');
  const handleChangeEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  const [phone, setPhone] = useState<string>('');
  const handleChangePhone = (newPhone: string) => {
    setPhone(newPhone);
  };

  return (
    <FlexContainer className="mt-[50px]">
      <Paper className="w-[900px] h-[700px] justify-evenly">
        <div className="w-full text-center mt-5">
          <Text size="text-3xl" className="font-bold">
            회원가입
          </Text>
        </div>
        <span className="w-full p-0.5 bg-slate-200 my-5"></span>

        <FlexContainer className="flex-col h-[400px] ">
          <FlexContainer className="h-full">
            <FlexContainer className="flex-col h-full justify-evenly mr-10">
              <Text
                size="text-base"
                className="mr-5 font-bold h-[50px] leading-12"
              >
                아이디
              </Text>
              <Text
                size="text-base"
                className="mr-5 font-bold h-[50px] leading-12"
              >
                비밀번호
              </Text>
              <Text
                size="text-base"
                className="mr-5 font-bold h-[50px] leading-12"
              >
                비밀번호 확인
              </Text>
              <Text
                size="text-base"
                className="mr-5 font-bold h-[50px] leading-12"
              >
                이메일
              </Text>
              <Text
                size="text-base"
                className="mr-5 font-bold h-[50px] leading-12"
              >
                전화번호
              </Text>
            </FlexContainer>
            <FlexContainer className="flex-col h-full justify-evenly">
              <Input
                value={id}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangeId(event.target.value)
                }
                type="text"
                placeholder="ID"
                className="w-[400px] h-[50px] "
              />
              <Input
                value={password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangePassword(event.target.value)
                }
                type="password"
                placeholder="Password (영문, 숫자, 특수문자 포함 8자 이상)"
                className="w-[400px] h-[50px] "
              />
              <Input
                value={passwordCheck}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangePasswordCheck(event.target.value)
                }
                type="password"
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
                value={phone}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangePhone(event.target.value)
                }
                type="tel"
                placeholder="전화번호"
                className="w-[400px] h-[50px] "
              />
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer className="flex-col justify-center ">
          <Button size="base" className="mb-3">
            회원가입
          </Button>
        </FlexContainer>
      </Paper>
    </FlexContainer>
  );
}
