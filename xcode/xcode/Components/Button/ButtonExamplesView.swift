import SwiftUI

struct ButtonExamplesView: View {
    var body: some View {
        List {
            NavigationLink(
                "Default Button",
                destination: (
                    VStack(spacing: 20) {
                        Button(
                            "Cancel",
                            role: .cancel,
                            action: {}
                        )
                        Button(
                            "Destructive",
                            role: .destructive,
                            action: {}
                        )
                    }
                )
            )
            NavigationLink(
                "Styled Button",
                destination: (ScrollView {
                    VStack(spacing: 20) {
                        /* Styled Button */
                        Button("Plain") {}
                            .buttonStyle(.plain)

                        Button("Automatic") {}
                            .buttonStyle(.automatic)

                        Button("Bordered") {}
                            .buttonStyle(.bordered)

                        Button("Bordered Prominent") {}
                            .buttonStyle(.borderedProminent)

                        Button("Borderless") {}
                            .buttonStyle(.borderless)

                        /* Solid Button */
                        Button(action: {}) {
                            Text("Solid Button")
                                .padding()
                                .foregroundColor(.white)
                                .background(.orange)
                                .cornerRadius(10)
                        }

                        /* Button with Shadow */
                        Button(action: {}) {
                            Text("Button with Shadow")
                                .padding()
                                .foregroundColor(.white)
                                .background(.orange)
                                .cornerRadius(10)
                        }
                        .shadow(color: .red, radius: 15, y: 5)

                        /* Rounded Button */
                        Button(action: {}) {
                            Text("Rounded Button")
                                .padding()
                                .foregroundColor(.white)
                                .background(.orange)
                                .cornerRadius(100)
                        }

                        /* Disabled */
                        Button("Enabled") {}
                            .buttonStyle(.borderedProminent)
                            .tint(.blue)
                            .controlSize(.large)

                        Button("Disabled") {}
                            .buttonStyle(.borderedProminent)
                            .tint(.blue)
                            .controlSize(.large)
                            .disabled(true)

                        /* Border Button */
                        Button(action: {}) {
                            Text("Border Button")
                                .padding()
                                .border(.blue)
                        }

                        /* Square Border Button */
                        Button(action: {}) {
                            Text("Border Button")
                                .padding()
                                .background(
                                    RoundedRectangle(cornerRadius: 10)
                                        .stroke(.blue, lineWidth: 1)
                                )
                        }

                        /* Button with Symbols */
                        Button(action: {}) {
                            Image(systemName: "magnifyingglass")
                            Text("Search")
                                .padding(.horizontal)
                        }
                        .padding()
                        .background(.blue)
                        .foregroundColor(.white)
                        .cornerRadius(10)

                        Button(action: {}) {
                            VStack {
                                Image(systemName: "message.fill")
                                Text("Message")
                                    .padding(.horizontal)
                            }
                        }
                        .padding()
                        .background(.blue)
                        .foregroundColor(.white)
                        .cornerRadius(.infinity)

                        /* Control Size */
                        Button("Mini") {}
                            .buttonStyle(.bordered)
                            .controlSize(.mini)

                        Button("Small") {}
                            .buttonStyle(.bordered)
                            .controlSize(.small)

                        Button("Regular") {}
                            .buttonStyle(.bordered)
                            .controlSize(.regular)

                        Button("Large") {}
                            .buttonStyle(.bordered)
                            .controlSize(.large)

                        /* Border Shape */
                        Button("Automatic") {}
                            .buttonStyle(.bordered)
                            .controlSize(.large)
                            .buttonBorderShape(.automatic)

                        Button("Capsule") {}
                            .buttonStyle(.bordered)
                            .controlSize(.large)
                            .buttonBorderShape(.capsule)

                        Button("Rounded") {}
                            .buttonStyle(.bordered)
                            .controlSize(.large)
                            .buttonBorderShape(.roundedRectangle)

                        /* Custom Styled */
                        Button(action: {}) {
                            Text("Custom Styled")
                                .font(.title)
                                .padding()
                                .background(Color.blue)
                                .foregroundColor(.white)
                                .cornerRadius(10)
                        }
                    }.frame(maxWidth: .infinity)
                })
            )
            NavigationLink(
                "Image Button",
                destination: (Button(action: {}) {
                    Image(systemName: "hand.thumbsup.fill")
                        .font(.largeTitle)
                        .foregroundColor(.green)
                })
            )
        }
        .navigationTitle("Button Examples")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct ButtonExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        ButtonExamplesView()
    }
}
