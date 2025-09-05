import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailLayoutProps {
  preview: string;
  children: React.ReactNode;
  baseUrl: string;
}

export const EmailLayout = ({ preview, children, baseUrl }: EmailLayoutProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>{preview}</Preview>
      <Container style={container}>
          <Section style={box}>
            <Img
              src="https://demo.sonicjs.com/images/sonicjs-logo-dark.svg"
              width="300"
              alt="SonicJs"
            />
            <Hr style={hr} />
            {children}
            <Hr style={hr} />
            <Text style={footer}>
              SonicJs Inc., 711 Fast Lane, Speedy Hills, CA 90210
            </Text>
          </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailLayout;

// Styles remain the same
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '40px auto',
  padding: '20px 0',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
}; 