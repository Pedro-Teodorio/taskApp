import styled from 'styled-components/native';

export type TaskStyleProps = {
    status: 'pending' | 'completed';
}

export const Container = styled.Pressable`
  width: 100%;
  height: 92px;
  flex-direction: row;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 16px;
  justify-content: center;
  background-color: #fafafa;
  border-radius: 10px;
  gap: 12px;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Status = styled.View<TaskStyleProps>`
  width: 10px;
  height: 92px;
  background-color: ${({status}) => status === 'pending' ? '#f87171' : '#60a5fa'};
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 18px;
  font-weight: 500;
  color: #18181b;
`;




export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;


export const Label = styled.Text`
  font-size: 12px;
  color: #6b7280;  
  margin-left: 3px;
`;
