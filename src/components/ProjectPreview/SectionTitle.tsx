import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { CAPITALIZE } from 'global/variables'

// import { titlePadding } from 'components/ProjectPreview/ProjectDescription'

interface Props {
	text: string
}

const useStyles = makeStyles({
	titleStyle: {
		paddingTop: '1rem',
		paddingBottom: '0',
	},
})

const SectionTitle = ({ text }: Props) => {
	const { titleStyle } = useStyles()

	return (
		<>
			<Typography className={clsx(titleStyle, CAPITALIZE)} variant='h4'>
				{text}
			</Typography>
		</>
	)
}

export default SectionTitle
