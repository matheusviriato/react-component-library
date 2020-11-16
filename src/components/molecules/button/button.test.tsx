import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { matchers } from 'jest-emotion'
import Button from '.'

expect.extend(matchers)

describe('Button component', () => {
  const id: string = 'robin-button-id'
  const mockFunction: jest.Mock<any, any> = jest.fn()

  describe('rendering tests', () => {
    test('should match snapshot', () => {
      const { baseElement } = render(
        <Button id={id} onClick={mockFunction}>
          Robin
        </Button>
      )
      expect(baseElement).toMatchSnapshot()
    })
    describe('when mount primary button', () => {
      test('should have a background color equal primary color by default', () => {
        render(
          <Button id={id} onClick={mockFunction}>
            Robin
          </Button>
        )
        expect(screen.getByTestId('button-testid')).toHaveStyleRule('background-color', '#ffcc00')
      })
    })
    describe('when mount outline button', () => {
      beforeEach(() => {
        render(
          <Button id={id} outline onClick={mockFunction}>
            Robin
          </Button>
        )
      })

      test('should have a background color equal white', () => {
        expect(screen.getByTestId('button-testid')).toHaveStyleRule('background-color', '#fff')
      })
      test('should have a border color equal darkGray', () => {
        expect(screen.getByTestId('button-testid')).toHaveStyleRule('border-color', '#333')
      })
    })
    describe('when mount disabled button', () => {
      beforeEach(() => {
        render(
          <Button id={id} disabled onClick={mockFunction}>
            Robin
          </Button>
        )
      })

      it('should have a background color equal lightestGray', () => {
        expect(screen.getByTestId('button-testid')).toHaveStyleRule('background-color', '#f5f5f5')
      })
      it('should change the cursor', () => {
        expect(screen.getByTestId('button-testid')).toHaveStyleRule('cursor', 'not-allowed')
      })
    })
  })
  describe('behavior tests', () => {
    it('should call the method passed as a callback when the button is clicked', () => {
      render(
        <Button id={id} onClick={mockFunction}>
          Robin
        </Button>
      )
      fireEvent.click(screen.getByTestId('button-testid'))
      expect(mockFunction).toHaveBeenCalled()
    })
    it('should not call the method passed as a callback when the button disabled is clicked', () => {
      const anotherMockFunction = jest.fn()
      render(
        <Button id={id} disabled onClick={anotherMockFunction}>
          Robin
        </Button>
      )
      fireEvent.click(screen.getByTestId('button-testid'))
      expect(anotherMockFunction).not.toHaveBeenCalled()
    })
  })
})
