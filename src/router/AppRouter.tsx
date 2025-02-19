import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

import { PATH } from '@/constants/path';

import * as Lazy from '@router/lazy';

import App from '@/App';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: PATH.ROOT,
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: '',
          element: (
            <Suspense>
              <Lazy.MainPage />
            </Suspense>
          ),
        },
        {
          path: PATH.CREATE_PLAYGROUND,
          element: (
            <Suspense>
              <Lazy.CreatePlaygroundPage />
            </Suspense>
          ),
        },
        {
          path: PATH.DELETE_ACCOUNT(':userId'),
          element: (
            <Suspense>
              <Lazy.DeleteAccountPage />
            </Suspense>
          ),
        },
        {
          path: PATH.DIRECT_MESSAGE,
          element: (
            <Suspense>
              <Lazy.DirectMessagePage />
            </Suspense>
          ),
        },
        {
          path: PATH.EDIT_ACCOUNT(':userId'),
          element: (
            <Suspense>
              <Lazy.EditAccountPage />
            </Suspense>
          ),
        },
        {
          path: PATH.CREATE_PROFILE,
          element: (
            <Suspense>
              <Lazy.CreateProfilePage />
            </Suspense>
          ),
        },
        {
          path: PATH.EDIT_PROFILE(':userId'),
          element: (
            <Suspense>
              <Lazy.EditProfilePage />
            </Suspense>
          ),
        },
        {
          path: PATH.FIND_ACCOUNT,
          element: (
            <Suspense>
              <Lazy.FindAccountPage />
            </Suspense>
          ),
        },
        {
          path: PATH.FIND_PLAYGROUND_FRIEND,
          element: (
            <Suspense>
              <Lazy.FindPlaygroundFriendPage />
            </Suspense>
          ),
        },
        {
          path: PATH.FRIENDS_PLAYED,
          element: (
            <Suspense>
              <Lazy.FriendsPlayedPage />
            </Suspense>
          ),
        },
        {
          path: PATH.PLAYGROUND_MESSAGE(':findFriendId'),
          element: (
            <Suspense>
              <Lazy.PlaygroundMessagePage />
            </Suspense>
          ),
        },
        {
          path: PATH.PLAYGROUND_ROOM(':playgroundId'),
          element: (
            <Suspense>
              <Lazy.PlaygroundRoomPage />
            </Suspense>
          ),
        },
        {
          path: PATH.PROFILE,
          element: (
            <Suspense>
              <Lazy.MyProfilePage />
            </Suspense>
          ),
        },
        {
          path: PATH.REPORT_FRIEND(':userId'),
          element: (
            <Suspense>
              <Lazy.ReportFriendPage />
            </Suspense>
          ),
        },
        {
          path: PATH.SIGNIN,
          element: (
            <Suspense>
              <Lazy.SignInPage />
            </Suspense>
          ),
        },
        {
          path: PATH.SIGNUP,
          element: (
            <Suspense>
              <Lazy.SignUpPage />
            </Suspense>
          ),
        },
        {
          path: PATH.PLAYGROUND_SEARCH,
          element: (
            <Suspense>
              <Lazy.PlaygroundSearchPage />
            </Suspense>
          ),
        },
        {
          path: PATH.FRIEND_MESSAGE(':noteId'),
          element: (
            <Suspense>
              <Lazy.FriendMessagePage />
            </Suspense>
          ),
        },
        {
          path: PATH.MY_RECRUITMENTS,
          element: (
            <Suspense>
              <Lazy.MyRecruitmentsPage />
            </Suspense>
          ),
        },
        {
          path: PATH.ACTIVE_RECRUITMENTS(':userId'),
          element: (
            <Suspense>
              <Lazy.ActiveRecruitmentsPage />
            </Suspense>
          ),
        },
        {
          path: PATH.FRIEND_RECOMMENDED(':userId'),
          element: (
            <Suspense>
              <Lazy.FreindRecommendedPage />
            </Suspense>
          ),
        },
        {
          path: PATH.USER_SETTING(':userId'),
          element: (
            <Suspense>
              <Lazy.UserSettingPage />
            </Suspense>
          ),
        },
        {
          path: PATH.PROFILE_INFO(':userId'),
          element: (
            <Suspense>
              <Lazy.ProfileInfoPage />
            </Suspense>
          ),
        },
        {
          path: PATH.PLAYGROUND_ROOM_LIST(':playgroundId'),
          element: (
            <Suspense>
              <Lazy.PlaygroundRoomListPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
