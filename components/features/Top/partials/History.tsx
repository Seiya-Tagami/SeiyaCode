import { Box, Heading, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

const steps = [
  { title: '大学1年6月～', description: '大学生プログラミングサークルに入り、フロントエンドから学び始めました。チームでのハッカソンも2度参加しました。' },
  { title: 'Second', description: 'Date & Time' },
  { title: 'Third', description: 'Select Rooms' },
  { title: 'Third', description: 'Select Rooms' },
]

// type HistoryProps = Omit<HomeData, 'hero' | 'skills'>
export const History: FC<any> = (props) => {
  // const { steps } = props

  const { activeStep } = useSteps({
    index: steps.length - 1,
    count: steps.length,
  })

  return (
    <Box mt={10}>
      <Heading as='h2' fontSize='2xl'>
        やってきたこと🐳
      </Heading>
      <Stepper index={activeStep} minHeight={140 * steps.length} mt={8} p={4} bg={'gray.100'} colorScheme={'green'} orientation='vertical' gap='0' rounded={'lg'}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink='0' w={240}>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}
