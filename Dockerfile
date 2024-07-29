FROM node:18-alpine


#set the environment variables
ENV NEXT_PUBLIC_AITABLE_API_KEY=uskXhQQGsDLGttCff0QuTFI
ENV NEXT_PUBLIC_DATASHEET_SOCIETY=dst44RYhkH89ZnLACE
ENV NEXT_PUBLIC_DATASHEET_COACH=dstnzx0yPUsVFakMtY
ENV NEXT_PUBLIC_DATASHEET_MEMBER=dstjre4vpBDaozhaPp
ENV NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_e77c0hc
ENV NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_eip906p


#this is the current directory, so all paths specified below should be relative to it
WORKDIR /fitness-website/app


COPY ./package.json .


RUN npm install


COPY . .


RUN npm run build


EXPOSE 3000

# in production we use start command
CMD ["npm", "start"]