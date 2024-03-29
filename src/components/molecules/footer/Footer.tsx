import { Logo } from '@/components/atoms';
import type { FC } from '@/types';
import { styled, theme } from '~/stitches';

import {
  FooterLink,
  FooterLinksGroup,
  type FooterLinkProps,
} from './FooterLinksGroup';
import { SocialLinks } from './SocialLinks';

const StyledFooter = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  py: '$$verticalContentPadding',
  px: '$14',
  gap: '$$verticalContentPadding',
  borderTop: '1px solid $divider',
  '@tablet-md': {
    px: 0,
  },
});

const InnerFooter = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$16',
  '@tablet-sm': {
    justifyContent: 'space-between',
  },
});

const BrandLink = styled(FooterLink, {
  display: 'inline-flex',
  alignSelf: 'flex-start',
  gap: '$6',
  minHeight: '30px',
  minWidth: '130px',
  '@mobile-md': {
    minWidth: '154px',
  },
  '& > svg': {
    width: '24px',
    height: '24px',
  },
});

const LinksContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'calc($$verticalContentPadding / 2)',
  justifyContent: 'space-between',
  '@mobile-md': {
    justifyContent: 'unset',
  },
  '@tablet-sm': {
    justifyContent: 'space-between',
  },
});

const primaryLinks: Array<FooterLinkProps> = [
  {
    title: 'About',
    href: '/about',
    gradient: 'blue-to-green',
  },
  {
    title: 'Blog',
    href: '/blog',
    gradient: 'yellow-to-orange',
  },
  {
    title: 'Projects',
    href: '/projects',
    gradient: 'red-to-purple',
  },
  {
    title: 'Contact',
    href: '/contact',
    gradient: 'brand-to-blue',
  },
];

const secondaryLinks: Array<FooterLinkProps> = [
  {
    title: 'Idol',
    href: 'https://en.wikipedia.org/wiki/Grant_Gustin',
    gradient: 'yellow-to-orange',
  },
   {
    title: 'Source',
    href: 'https://github.com/piyushyadav0191/portfolio',
    gradient: 'blue-to-green',
  }
];

const metaLinks: Array<FooterLinkProps> = [
  {
    title: 'RSS',
    href: '/feed.xml',
    gradient: 'yellow-to-orange',
    a11yTitle: 'RSS Feed',
    openInNewTab: true,
  },
  {
    title: 'medium',
    href: 'https://medium.com/@piyushyadav0191',
    gradient: 'brand-to-blue',
    a11yTitle: 'my medium profile',
    openInNewTab: true,
  },
];

export const Footer: FC = (props) => {
  return (
    <StyledFooter css={props.css}>
      <LinksContainer>
        <FooterLinksGroup title={'Primary pages links'} links={primaryLinks} />
        <FooterLinksGroup
          title={'Secondary pages links'}
          links={secondaryLinks}
        />
        <FooterLinksGroup meta title={'Meta pages links'} links={metaLinks} />
      </LinksContainer>
      <InnerFooter>
        <BrandLink
          href={'/'}
          title={'Home page'}
          gradient={'brand-to-blue'}
          forceGradient
        >
          <Logo fillColor={theme.colors['gradient-brand']?.value} />
          <span>Piyush Yadav</span>
        </BrandLink>
        <SocialLinks />
      </InnerFooter>
    </StyledFooter>
  );
};
