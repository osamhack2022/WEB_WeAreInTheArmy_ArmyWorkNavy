import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import Divider from '../../UI/Divider';
import FlexContainer from '../../UI/FlexContantainer';
import Input from '../../UI/Input';
import Paper from '../../UI/Paper';
import Text from '../../UI/Text';

export default function LoginTemplate() {
  const [id, setId] = useState<string>('');
  const handleChangeId = (newId: string) => {
    setId(newId);
  };
  const [password, setPassword] = useState<string>('');
  const handleChangePassword = (newPassword: string) => {
    setPassword(newPassword);
  };

  return (
    <FlexContainer className="mt-[50px] ">
      <Paper className="w-[900px] h-[500px] justify-evenly">
        <div className="w-full text-center mt-5">
          <Text size="text-3xl" className="font-bold">
            로그인
          </Text>
        </div>
        <span className="w-full p-0.5 bg-slate-200 my-5"></span>
        <FlexContainer className="flex-col">
          <FlexContainer className="items-center mb-5">
            <Text size="text-base" className="mr-5 font-bold">
              아이디
            </Text>
            <Input
              value={id}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeId(event.target.value)
              }
              type="text"
              placeholder="ID"
              className="w-[300px] h-[50px] "
            />
          </FlexContainer>
          <FlexContainer className="items-center mb-5">
            <Text size="text-base" className="mr-5 font-bold">
              아이디
            </Text>
            <Input
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChangePassword(event.target.value)
              }
              type="password"
              placeholder="Password"
              className="w-[300px] h-[50px]"
            />
          </FlexContainer>
        </FlexContainer>
        <FlexContainer className="flex-col justify-center ">
          <Button size="base" className="mb-3">
            로그인하기
          </Button>
          <Text size="text-sm" className="text-slate-400">
            아이디가 없으신가요?
            <span className="font-bold underline">
              <Link to="/signup">회원가입하기</Link>
            </span>
          </Text>
        </FlexContainer>
      </Paper>
    </FlexContainer>
  );
}
