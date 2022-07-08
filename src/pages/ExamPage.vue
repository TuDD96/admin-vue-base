<template>
  <div class="card m-3">
    <h5 class="card-header" :style="{ color: Color.aqua }">
      <p>{{ Color.aqua }}</p>
      <button @click="warn('test')">change</button>
    </h5>
    <div class="card-body">
      <Form
        v-slot="{ errors }"
        :validation-schema="validateFormLogin()"
        @submit="onSubmit"
      >
        <div class="form-row">
          <div class="form-group col">
            <label>Title</label>
            <Field
              v-model="$i18n.locale"
              name="title"
              as="select"
              class="form-control"
              :class="{ 'is-invalid': errors.title }"
            >
              <option value="en">Mr</option>
              <option value="vi">Mrs</option>
              <option value="ja">Miss</option>
            </Field>
            <div class="invalid-feedback">
              {{ errors.title }}
            </div>
          </div>
          <div class="row">
            <div class="form-group col-6">
              <label>First Name</label>
              <Field
                name="firstName"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.firstName }"
              />
              <div class="invalid-feedback">
                {{ errors.firstName }}
              </div>
            </div>
            <div class="form-group col-6">
              <label>Last Name</label>
              <Field
                name="lastName"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.lastName }"
              />
              <div class="invalid-feedback">
                {{ errors.lastName }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col">
            <label>Date of Birth</label>
            <Field
              name="dob"
              type="date"
              class="form-control"
              :class="{ 'is-invalid': errors.dob }"
            />
            <div class="invalid-feedback">
              {{ errors.dob }}
            </div>
          </div>
          <div class="form-group col">
            <label>Email</label>
            <Field
              name="email"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.email }"
            />
            <div class="invalid-feedback">
              {{ errors.email }}
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col">
            <label>Password</label>
            <Field
              name="password"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errors.password }"
            />
            <div class="invalid-feedback">
              {{ errors.password }}
            </div>
          </div>
          <div class="form-group col">
            <label>Confirm Password</label>
            <Field
              name="confirmPassword"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errors.confirmPassword }"
            />
            <div class="invalid-feedback">
              {{ errors.confirmPassword }}
            </div>
          </div>
        </div>
        <div class="form-group form-check">
          <Field
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            value="true"
            class="form-check-input"
            :class="{ 'is-invalid': errors.acceptTerms }"
          />
          <label for="acceptTerms" class="form-check-label">
            Accept Terms & Conditions
          </label>
          <div class="invalid-feedback">
            {{ errors.acceptTerms }}
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary mr-1">Register</button>
          <button type="reset" class="btn btn-secondary">Reset</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import * as Yup from "yup";
import { mapMutations } from "vuex";

export default {
  data() {},
  methods: {
    ...mapMutations({
      setLocale: "Lang/setLocale",
    }),
    validateFormLogin() {
      return Yup.object().shape({
        title: Yup.string().required(),
        firstName: Yup.string().required(this.$t("validation.required")),
        lastName: Yup.string().required("Last name is required"),
        dob: Yup.string()
          .required("Date of Birth is required")
          .matches(
            /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
            "Date of Birth must be a valid date in the format YYYY-MM-DD"
          ),
        email: Yup.string()
          .required("Email is required")
          .email("Email is invalid"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .max(12, "Password must be at least 12 characters")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
        acceptTerms: Yup.string().required("Accept Ts & Cs is required"),
      });
    },
    onSubmit(values) {
      // display form values on success
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(values, null, 4));
    },
  },
};
</script>
