import * as React from 'react';
import PropTypes from 'prop-types';

import { FiberManualRecordOutlined } from '@mui/icons-material';
import { Box, List, ListItem, ListItemText, ListItemIcon, ListSubheader } from '@mui/material';

export function SubCategoryListing({ list, name = '' }) {
  return list?.length
    ? list.map((item, index) => (
        <ListItem
          key={`item-${name}-${index}-${item}`}
          sx={{
            py: 0,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: '20px',
              ml: '20px',
            }}
          >
            <FiberManualRecordOutlined sx={{ fontSize: '8px' }} />
          </ListItemIcon>
          <ListItemText
            primary={item}
            primaryTypographyProps={{
              fontSize: '14px',
            }}
          />
        </ListItem>
      ))
    : '';
}
function RenderList({ data }) {
  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        position: 'relative',
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {data.length
        ? data.map(({ category, subCategory }) => (
            <li key={`section-${category}`}>
              <ul>
                <ListSubheader sx={{ lineHeight: '36px' }}>{category}</ListSubheader>
                <SubCategoryListing list={subCategory} />
              </ul>
            </li>
          ))
        : ''}
    </List>
  );
}
export default function ListService({ data }) {
  const splitPoint = Math.ceil(data.length / 2);
  const list1 = data.slice(0, splitPoint);
  const list2 = data.slice(splitPoint);

  return (
    <Box display="flex">
      <RenderList data={list1} />
      <RenderList data={list2} />
    </Box>
  );
}

ListService.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      subCategory: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

RenderList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      subCategory: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
