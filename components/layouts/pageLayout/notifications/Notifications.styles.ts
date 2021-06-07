import styled, { css } from 'styled-components'

const padding = css`
  padding: 1rem 2rem;
`

export const NotificationsWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 14px;

  .toast {
    font-size: inherit;
  }

  .toast-header {
    justify-content: space-between;
    ${padding}
  }

  .toast-body {
    ${padding}
  }

  .close {
    display: none;
  }

  .title {
    text-transform: capitalize;
    font-size: 15px;
  }
`

export const NotificationSign = styled.span<{ type: string }>`
  display: inline-block;
  background-color: ${({ type, theme: { palette } }) => {
    if (type === 'error') return palette.error
    else if (type === 'warning') return palette.warning
    return palette.success
  }};
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`
