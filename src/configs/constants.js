import * as yup from 'yup';

export const PUBLIC_IMAGE_FOLDER = '/images/';
export const DEFAULT_BANNER_IMAGE = 'banners/default.png';
export const banners = ['banners/cloud.jpg', 'banners/dns-server.png', 'banners/full-stack-web-development.jpg', 'banners/load-balancer.png'];

export const selectOptions = [
    {
        label: 'Cricket',
        value: 'cricket',
    },
    {
        label: 'Football',
        value: 'football',
    },

];

export const radioOptionsCricket = [
    {
        label: 'Batsman',
        value: 'batsman',
    },
    {
        label: 'WicketKeeper',
        value: 'wicket-keeper',
    },
    {
        label: 'Bowler',
        value: 'bowler',
    },
    {
        label: 'All-Rounder',
        value: 'all-rounder',
    },
];

export const schema = yup.object().shape({
    email: yup.string()
      .trim().email().required('Email Address is a required field'),
    password: yup.string()
      .required('Password is required')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, 'Must contain 8 characters, at least one uppercase letter, one lowercase letter and one number'),
  });

export const radioOptionsFootball = [
    {
        label: 'Striker',
        value: ' striker',
    },
    {
        label: 'Defender',
        value: 'defender',
    },
];
