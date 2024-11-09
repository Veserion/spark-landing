import React from 'react';
import {
  StyledCallToAction,
  CallToActionIcon,
  CallToActionContent,
  CallToActionTitle,
  CallToActionSubtitle
} from './styles';

interface CallToActionProps {
  icon: string;
  title: string;
  subtitle: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ icon, title, subtitle }) => (
  <StyledCallToAction>
    <CallToActionIcon src={icon} alt="" />
    <CallToActionContent>
      <CallToActionTitle>{title}</CallToActionTitle>
      <CallToActionSubtitle>{subtitle}</CallToActionSubtitle>
    </CallToActionContent>
  </StyledCallToAction>
);

export default CallToAction;