
import SwiftUI

struct MainView: View {
    var body: some View {
        NavigationView {
            List {
                Section(header: Text("Basic Components")) {
                    NavigationLink("Text", destination: TextExamplesView())
                    NavigationLink("Image", destination: ImageExamplesView())
                    NavigationLink("Toggle", destination: ToggleExamplesView())
                    NavigationLink("Button", destination: ButtonExamplesView())
                    NavigationLink("Slider", destination: SliderExamplesView())
                    NavigationLink("Stepper", destination: StepperExamplesView())
                    NavigationLink("TextField", destination: TextFieldExamplesView())
                    NavigationLink("DatePicker", destination: DatePickerExamplesView())
                    NavigationLink("ColorPicker", destination: ColorPickerExamplesView())
                    NavigationLink("ProgressView", destination: ProgressViewExamplesView())
                }

                Section(header: Text("Containers")) {
                    NavigationLink("VStack", destination: VStackExamplesView())
                    NavigationLink("HStack", destination: HStackExamplesView())
                    NavigationLink("ZStack", destination: ZStackExamplesView())
                    NavigationLink("Group", destination: GroupExamplesView())
                    NavigationLink("Form", destination: FormExamplesView())
                }

                Section(header: Text("Lists and Sections")) {
                    NavigationLink("List", destination: ListExamplesView())
                    NavigationLink("Section", destination: SectionExamplesView())
                }
                
                Section(header: Text("Navigation and Tabs")) {
                    NavigationLink("TabView", destination: TabViewExamplesView())
                    NavigationLink("NavigationView", destination: NavigationViewExamplesView())
                }

                Section(header: Text("Shapes and Graphics")) {
                    NavigationLink("Circle", destination: CircleExamplesView())
                    NavigationLink("Rectangle", destination: RectangleExamplesView())
                    NavigationLink("Capsule", destination: CapsuleExamplesView())
                    NavigationLink("Ellipse", destination: EllipseExamplesView())
                    NavigationLink("Divider", destination: DividerExamplesView())
                }
                
                Section(header: Text("Other Components")) {
                    NavigationLink("Spacer", destination: SpacerExamplesView())
                    NavigationLink("Label", destination: LabelExamplesView())
                    NavigationLink("Menu", destination: MenuExamplesView())
                    NavigationLink("Picker", destination: PickerExamplesView())
                    NavigationLink("GeometryReader", destination: GeometryReaderExamplesView())
                }
            }
            .navigationTitle("SwiftUI Components")
//            .navigationBarTitleDisplayMode(.automatic)
        }
    }
}

struct MainView_Previews: PreviewProvider {
    static var previews: some View {
        MainView()
    }
}
