import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import PostControls from 'flarum/forum/utils/PostControls';
import UserControls from 'flarum/forum/utils/UserControls';
import Button from 'flarum/common/components/Button';
import copyTextToClipboard from './utils/copyTextToClipboard';

app.initializers.add('datlechin/flarum-copy-links', () => {
  extend(DiscussionControls, 'userControls', function (items, discussion) {
    const discussionUrl = app.forum.attribute('baseUrl') + app.route.discussion(discussion);
    items.add(
      'copyLink',
      Button.component(
        {
          icon: 'fas fa-copy',
          onclick: () => {
            copyTextToClipboard(discussionUrl);
          },
        },
        app.translator.trans('datlechin-copy-links.forum.discussion_controls.copy_link_button')
      )
    );
  });

  extend(PostControls, 'userControls', function (items, post) {
    const postUrl = app.forum.attribute('baseUrl') + app.route.post(post);
    items.add(
      'copyLink',
      Button.component(
        {
          icon: 'fas fa-copy',
          onclick: () => {
            copyTextToClipboard(postUrl);
          },
        },
        app.translator.trans('datlechin-copy-links.forum.post_controls.copy_link_button')
      )
    );
  });

  extend(UserControls, 'userControls', function (items, user) {
    const userUrl = app.forum.attribute('baseUrl') + app.route.user(user);
    items.add(
      'copyLink',
      Button.component(
        {
          icon: 'fas fa-copy',
          onclick: () => {
            copyTextToClipboard(userUrl);
          },
        },
        app.translator.trans('datlechin-copy-links.forum.user_controls.copy_link_button')
      )
    );
  });
});
